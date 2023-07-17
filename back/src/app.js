const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const knex = require('knex')(require('../knexfile.js')['development']);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  knex('movies')
    .select('*')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/add-movies', (req, res) => {
  knex('addedmovies')
  .select('*')
  .then(data => {
    console.log(data);
    res.status(200).json(data);
  })
})

app.post('/add-movies', (req, res) => {
  console.log(req.body);

  const { title, year, director, rating, movieDescription, poster } = req.body;
  let id;

  knex('addedmovies')
  .select('*')
  .then(data => {
    console.log(`currently there are ${data.length} movies`)
    id = data.length + 1
    knex('addedmovies')
    .insert ({
      id: id, 
      title: `${title}`, 
      released: `${year}`, 
      rating: `${rating}`,
      description: `${movieDescription}`,
      img: `${poster}`,
      director: `${director}`
    })
    .then(res.json({message: `successfully uploaded ${title}`}))
    .catch(error => {
      res.status(500).json({ error: "failed to add your movie" });
    })
  })
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});