const express = require("express");
const app = express();
const cors = require("cors");
// const pool = require("./db");
// const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

// app.post('/test', function (req, res, next) {
//   const testPostMsg = { message: 'Posting is working!! 🛎️' }
//   res.json(testPostMsg).sendStatus(201);
// });

app.get('/test', function (req, res, next) {
  res.json({ message: 'Message was fetched! 🛎️' });
});

app.get('/', function (req, res, next)
{
  res.json({ message: "welcome to splitznorm!🛎️" }
  )
});
// ** to enable nodemon routes use app.js
// app.listen(port, () => {
//   console.log(`Server has started on port ${port}`);
// });

// module.exports = app;