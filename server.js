/* eslint-disable max-len */
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'docs')));

app.listen(port, () => {
  console.log(`Hello desta, your app run on http://localhost:${port}`);
});

app.get('/generate-password', async (req, res) => {
  const fetchApi = await fetch(
      'https://password-generator-by-api-ninjas.p.rapidapi.com/v1/passwordgenerator?length=22&exclude_numbers=true&exclude_special_chars=true',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ce52afc1a6mshadf7af77136a22bp1ca737jsn8f382b4f4c33',
          'X-RapidAPI-Host': 'password-generator-by-api-ninjas.p.rapidapi.com',
        },
      },
  );
  const passwordResponse = await fetchApi.json();
  console.log(passwordResponse);
  await res.json(passwordResponse);
});
