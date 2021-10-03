import { createClient } from 'redis';

const client = createClient({
  host: '127.0.0.1',
  port: '6379',
});

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

const hashKey = 'HolbertonSchools';

const hashSet = (hash, key, value) => {
  client.hset(hash, key, value, (err, reply) => {
    console.log(`Reply: ${reply}`);
  });
};

hashSet(hashKey, 'Portland', 50);
hashSet(hashKey, 'Seattle', 80);
hashSet(hashKey, 'New York', 20);
hashSet(hashKey, 'Bogota', 20);
hashSet(hashKey, 'Cali', 40);
hashSet(hashKey, 'Paris', 2);

client.hgetall(hashKey, (err, object) => console.log(object));
