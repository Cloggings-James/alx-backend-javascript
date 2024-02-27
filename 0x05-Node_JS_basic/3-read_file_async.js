// Reading a file asynchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const rows = data.trim().split('\n');
      const student = {};

      for (const row of rows) {
        const [firstname, lastname, age, field] = row.split(','); // eslint-disable-line

        if (field && field !== 'field') {
          if (!student[field]) {
            student[field] = [];
          }
          student[field].push(firstname);
        }
      }

      console.log(`Number of students: ${rows.length - 1}`);
      for (const field in student) { // eslint-disable-line
        console.log(`Number of students in ${field}: ${student[field].length}. List: ${student[field].join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
