// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim().split('\n');
    const student = {};

    for (const row of data) {
      const [firstname, lastname, age, field] = row.split(','); // eslint-disable-line

      if (field && field !== 'field') {
        if (!student[field]) {
          student[field] = [];
        }
        student[field].push(firstname);
      }
    }

    console.log(`Number of students: ${data.length - 1}`);
    for (const field in student) { // eslint-disable-line
      console.log(`Number of students in ${field}: ${student[field].length}. List: ${student[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
