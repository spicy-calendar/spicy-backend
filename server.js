const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');

// MIDDLEWARE
app.use(helmet());
app.use(bodyParser.json());

// ROUTER
const router = express.Router();
app.use(router);
const routes = require('./routes/index');
routes(router);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));