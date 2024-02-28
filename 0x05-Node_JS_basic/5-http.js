const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 1245;
const STUDENT_LIST_FILE = path.join(__dirname, 'students.csv'); // Adjust if needed

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    const databaseArg = url.searchParams.get('db'); // Get database argument

    fs.readFile(STUDENT_LIST_FILE, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error reading student list file.');
        return; // Exit the function early
      }

      // Filter out empty lines and process CSV data (add your logic here)
      const students = data
        .split('\n')
        .filter(line => line.trim() !== '') // Remove empty lines
        .map(line => line.split(',')); // Split lines into arrays (modify as needed)

      // Handle database logic based on `databaseArg` (implement logic here)

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students:\n\n${students.join('\n')}`); // Adjust output format as needed
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found.');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = server;

