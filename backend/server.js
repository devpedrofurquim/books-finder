const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route to handle API requests
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from the backend' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});