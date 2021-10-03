import { createClient } from 'redis';

const subscriber = createClient({
  host: '127.0.0.1',
  port: '6379',
});

subscriber.on('connect', () => console.log('Redis client connected to the server'));
subscriber.on('error', (err) => console.log(`Redis client not connected to the server: ${err.message}`));

const channelV = 'holberton school channel';

subscriber.on('message', (channel, message) => {
  if (channel === channelV) {
    console.log(message);
  }
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe(channel);
    subscriber.quit();
  }
});

subscriber.subscribe(channelV);
module.exports = subscriber;
