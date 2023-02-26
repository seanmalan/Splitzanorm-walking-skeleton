const express = require("express");
const app = express();
const cors = require("cors");
// const pool = require("./db");
const port = 5001
app.use(cors());
app.use(express.json());

app.get('/', function(req, res, next) {
  res.json({ message: 'Api is working!!'🛎️ });
});

// app.get("/products", async (req, res) => {
//     try {
//         const allProducts = await pool.query("SELECT * FROM product");   
//         res.json(allProducts.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

app.listen(5001, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;