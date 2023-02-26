const express = require("express");
const app = express();
const cors = require("cors");
// const pool = require("./db");

app.use(cors());
app.use(express.json());


app.post('/test', function (req, res, next) {
  const testPostMsg = { message: 'Posting is working!! 🛎️' }
  res.json(testPostMsg).sendStatus(201);
});

app.get('/', function(req, res, next) {
  res.json({ message: 'Api is working!! 🛎️' });
});

// app.get("/products", async (req, res) => {
//     try {
//         const allProducts = await pool.query("SELECT * FROM product");   
//         res.json(allProducts.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });


module.exports = app;