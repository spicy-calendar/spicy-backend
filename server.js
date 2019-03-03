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

// DATABASE
// const mysql = require('mysql');

// const connectToMySql = async (mongoPath) => {
//     try {
//         await mongoose.connect(mongoPath, {
//             useNewUrlParser: true,
//             useCreateIndex: true
//         });
//         console.log('Mongo connected!');
//     }catch(err) {
//         console.log(`Error: ${err}`);
//     }
// }
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port: "3306",
  user     : 'root',
  password : 'password',
});

connection.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
});

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));