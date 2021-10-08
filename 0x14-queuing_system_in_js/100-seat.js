import { createClient } from 'redis';
import { promisify } from 'util';
import express from 'express';
import kue from 'kue';

// --- global variables and services ---
let reservationEnabled;
const client = createClient();
const queue = kue.createQueue();
const app = express();
const hostname = 'localhost';
const port = 1245;
const queueName = 'reserve_seat';

// --- redis client ---

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error.message}`);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

const reserveSeat = (number) => {
  client.set('available_seats', number, (err, reply) => {
    if (err) console.log(`reserveSeat Error: ${err}`);
    console.log(`reserveSeat Reply: ${reply}`);
  });
};

const getCurrentAvailableSeats = async () => {
  const getAsync = promisify(client.get).bind(client);
  const count = await getAsync('available_seats');
  return count;
};

// --- express app ---

app.use(express.json());

app.listen(port, () => {
  reserveSeat(50);
  reservationEnabled = true;
  console.log(`API available on ${hostname} port ${port}`);
});

app.get('/available_seats', async (req, res) => {
  const availableSeats = await getCurrentAvailableSeats();
  res.json({ numberOfAvailableSeats: availableSeats });
});

app.get('/reserve_seat', async (req, res) => {
  if (reservationEnabled === false) return res.json({ status: 'Reservation are blocked' });

  const job = queue.create(queueName, {});

  job.save((err) => {
    if (err) return res.json({ status: 'Reservation failed' });
    return res.json({ status: 'Reservation in process' });
  });

  job.on('complete', () => {
    console.log(`Seat reservation job ${job.id} completed`);
  });

  job.on('failed', (errorMessage) => {
    console.log(`Seat reservation job ${job.id} failed: ${errorMessage}`);
  });
});

app.get('/process', async (req, res) => {
  queue.process(queueName, async (job, done) => {
    const availableSeats = await getCurrentAvailableSeats();
    console.log('available in process', availableSeats);

    if (availableSeats <= 0) {
      done(new Error('Not enough seats available'));
    }

    reserveSeat(Number(availableSeats) - 1);
    if (availableSeats <= 0) reservationEnabled = false;
    done();
  });
  return res.json({ status: 'Queue processing' });
});
