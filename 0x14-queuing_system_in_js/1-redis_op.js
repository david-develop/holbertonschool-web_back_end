import { createClient } from 'redis';

const client = createClient({
  host: '127.0.0.1',
  port: '6379',
});

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => console.log(reply));
};

const displaySchoolValue = (schoolName) => client.get(schoolName, (err, reply) => {
  console.log(reply);
});

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
