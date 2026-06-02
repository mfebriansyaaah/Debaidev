const { Client } = require('ssh2');
const fs = require('fs');
const path = require('path');

const conn = new Client();
const privateKeyPath = 'C:\\Users\\mfebr\\.gemini\\antigravity\\brain\\cf05a270-485a-4177-ba8c-3a95ce157da6\\scratch\\id_rsa';

const config = {
  host: '157.15.77.34',
  port: 31988,
  username: 'debaidev',
  privateKey: fs.readFileSync(privateKeyPath),
  passphrase: 'Febri126.'
};

console.log('Connecting to remote server...');
conn.on('ready', () => {
  console.log('SSH connection ready.');
  
  const deployScript = `
    echo "=== Activating Node.js Environment ==="
    source /home/debaidev/nodevenv/myweb/22/bin/activate && cd /home/debaidev/myweb
    
    echo "=== System Check ==="
    git --version
    node -v
    npm -v
    
    echo "=== Build Next.js project ==="
    npm run build
  `;
  
  conn.exec(deployScript, (err, stream) => {
    if (err) {
      console.error('Error executing commands:', err);
      conn.end();
      process.exit(1);
    }
    
    stream.on('close', (code, signal) => {
      console.log('Command closed with code ' + code);
      conn.end();
      process.exit(code);
    }).on('data', (data) => {
      process.stdout.write(data);
    }).stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}).on('error', (err) => {
  console.error('SSH connection error:', err);
  process.exit(1);
}).connect(config);
