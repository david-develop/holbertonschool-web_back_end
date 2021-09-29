const readDatabase = require('./full_server/utils');

const resp = [];
let msg;
readDatabase('database.csv').then((r) => {
  Object.keys(r).forEach((e) => {
    const count = r[e].length;
    const listFN = r[e].join(', ');
    msg = `Number of students in ${e}: ${count}. List: ${listFN}`;
    resp.push(msg);
  });
  console.log(resp.join('\n'));
});
