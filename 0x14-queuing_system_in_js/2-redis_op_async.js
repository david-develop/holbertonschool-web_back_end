import { createClient } from 'redis';

const { promisify } = require('util');

const client = createClient({
  host: '127.0.0.1',
  port: '6379',
});

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) => console.log(reply));
};

const displaySchoolValue = async (schoolName) => {
  const getAsync = promisify(client.get).bind(client);
  console.log(await getAsync(schoolName));
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
