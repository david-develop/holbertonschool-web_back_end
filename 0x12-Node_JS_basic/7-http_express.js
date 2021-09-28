const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const hostname = 'localhost';
const port = 1245;

const file = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(file);
    res.send(`${msg}${students.join('\n')}`);
  } catch (e) {
    res.send(`${msg}${e.message}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});

module.exports = app;
