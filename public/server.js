require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authControllers = require('../controllers/authController');
const routes = require('./routes');
const errorHandler = require('./errorHandler');


const port = process.env.PORT || 3000
const app = express();

const config = () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(cors());
};

const Server = async () => {
    app.get('/login', loginUser);
    app.post('/createUser', createUser);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is up on port ${port}`);
  });
};

const init = async () => {
  config();
  await Server();
};

init();
