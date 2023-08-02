require('dotenv').config();
const express = require('express');

const app = require('./src/app');

const port = parseInt(process.env.APP_PORT ?? '5001', 10);

app.use(express.json());

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.warn(`Server is listening on ${port}`);
  }
});
