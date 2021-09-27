const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const resp = [];
      let msg;

      let content = data.toString().split('\n');
      content = content.filter((item) => item);
      if (content.length > 0) {
        content.shift();
      }
      const numEst = content.length;
      msg = `Number of students: ${numEst}`;
      console.log(msg);
      resp.push(msg);

      const students = content.map((student) => student.split(','));

      const setField = new Set();
      students.forEach((student) => setField.add(student[3]));
      setField.forEach((field) => {
        const group = students.filter((student) => student[3] === field);
        const count = group.length;
        const names = group.map((student) => student[0]).join(', ');
        msg = `Number of students in ${field}: ${count}. List: ${names}`;
        console.log(msg);
        resp.push(msg);
      });
      resolve(resp);
    });
  });
}

module.exports = countStudents;
