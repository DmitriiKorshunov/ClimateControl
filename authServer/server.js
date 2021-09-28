const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: '28051998'
  });
});

app.listen(1000, () => console.log('API is running on http://localhost:1000/login'));
