const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/health',
  method: 'GET'
};

// Simple smoke test — run after starting the server (`npm start`)
const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => (data += chunk));
  res.on('end', () => {
    try {
      const obj = JSON.parse(data);
      if (res.statusCode === 200 && obj.status === 'ok') {
        console.log('OK: /health responded with status ok');
        process.exit(0);
      } else {
        console.error('FAIL: Unexpected response:', res.statusCode, data);
        process.exit(2);
      }
    } catch (e) {
      console.error('FAIL: Invalid JSON response', data);
      process.exit(2);
    }
  });
});

req.on('error', err => {
  console.error('Request error:', err.message);
  process.exit(2);
});

req.end();