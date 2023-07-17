const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const knex = require('knex')(require('../knexfile.js')['development']);

app.use(cors());

app.get('/', (req, res) => {
  knex('movies')
    .select('*')
    .then(data => {
      res.status(200).json(data);
    })
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});