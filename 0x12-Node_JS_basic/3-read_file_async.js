const fs = require('fs');

async function countStudents(path) {
  let content;

  try {
    content = await fs.promises.readFile(path, { encoding: 'utf8' });
    content = content.split('\n').filter((l) => l);
    if (content.length > 0) {
      content.shift();
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }

  const numEst = content.length;
  console.log(`Number of students: ${numEst}`);

  const students = content.map((student) => student.split(','));

  const setField = new Set();
  students.forEach((student) => setField.add(student[3]));
  setField.forEach((field) => {
    const group = students.filter((student) => student[3] === field);
    const count = group.length;
    const names = group.map((student) => student[0]).join(', ');
    console.log(`Number of students in ${field}: ${count}. List: ${names}`);
  });
}

module.exports = countStudents;
