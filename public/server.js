require('dotenv').config();
require('express').config();
require('body-parser').config();
require('cors').config();
import { loginUser, createUser} from './controllers/authController'
import routes, { notFoundRoute } from './routes';
import errorHandler from './errorHandler';


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
