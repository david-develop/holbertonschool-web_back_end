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
  // res.write('This is the list of our students\n');
  try {
    const students = await countStudents(file);
    res.send(`This is the list of our students\n${students.join('\n')}`);
  } catch (e) {
    res.send(e.message);
  }
  res.statusCode = 404;
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});

module.exports = app;
