const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT url FROM favorites;';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.error('ERROR IN GET /favorites');
      res.sendStatus(500);
    })
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorites ("url") VALUES ($1);`;
  const queryValue = [
    newFavorite
  ];
  pool.query(queryText, queryValue)
    .then(() => {res.sendStatus(201); })
    .catch((err) => {
      console.error('ERROR IN POST /favorite');
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
