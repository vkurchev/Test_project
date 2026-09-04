import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'app');
const port = 4173;

createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/api/users/1') {
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ id: 1, name: 'Ada Lovelace', role: 'admin' }));
    return;
  }

  const fileName = request.url === '/auth.html' ? 'auth.html' : 'index.html';
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  createReadStream(join(root, fileName)).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`Test application: http://127.0.0.1:${port}`);
});
