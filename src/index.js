const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig.js');

const setupAndStartServer = () => {
  app.listen(PORT, () => {
    console.log(`Server start on Port ${PORT}`);
  })
}

setupAndStartServer();