import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World! My name is Andrei');
  res.end();
}).listen(process.env.PORT);
