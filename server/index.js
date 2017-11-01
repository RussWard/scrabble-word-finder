const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3030;
const IP = process.env.IP || 'localhost';

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/postLetters', (req, res) => {
  console.log('LETTERS IN SERVER =====> ', req.body)
  res.send(200, req.body);
})

app.listen(PORT, () => {
  console.log('App is listening on ', PORT);
})

