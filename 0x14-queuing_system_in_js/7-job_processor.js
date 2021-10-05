import kue from 'kue';

const queue = kue.createQueue();
const blackListed = ['4153518780', '4153518781'];

const sendNotification = (phoneNumber, message, job, done) => {
  const total = 100;

  job.progress(0, total);

  if (blackListed.includes(phoneNumber)) {
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  job.progress(50, total);

  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  return done();
};

queue.process('push_notification_code_2', (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});
