const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { PORT } = require('./config/serverConfig.js');

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  // app.use('/api', apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server start on Port ${PORT}`);
  });

}

setupAndStartServer();