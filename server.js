import express from 'express';
import bodyParser from 'body-parser';
import sshRoutes from './routes/ssh.js';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/ssh', sshRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
