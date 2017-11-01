const axios = require('axios');

const postLetters = (letters) => {
  axios.post('/postLetters', { letters })
    .then(word => {
      console.log('RESPONSE ======> ', word);
    })
}