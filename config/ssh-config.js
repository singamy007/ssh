import fs from 'fs';

const privateKeyPath = 'D:/Users/LENOVO/.ssh/id_rsa'; // Use forward slashes
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

export default {
  host: '127.0.0.1',
  port: 22, // Default SSH port
  username: 'LENOVO',
  privateKey: fs.readFileSync('D:/Users/LENOVO/.ssh/id_rsa') // Example path to private key
};

