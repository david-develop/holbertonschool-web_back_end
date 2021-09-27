const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const file = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(file);
      res.end(`${students.join('\n')}`);
    } catch (e) {
      res.end(e.message);
    }
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
