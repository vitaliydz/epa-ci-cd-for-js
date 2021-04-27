var express = require('express');
var quotes = require('../services/Quotes');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(quotes.getAll());
});

router.get('/random', function (req, res, next) {
  const { tag } = req.query;

  res.json(quotes.random(tag));
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  const result = quotes.getById(id);
  
  result ? res.json(result) : res.sendStatus(404);
});

router.post('/', function (req, res, next) {
  const quote = req.body;
  res.json(quotes.add(quote));
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  const quote = req.body;
  const result = quotes.update({ id, ...quote }); 
  
  result ? res.json(result) : res.sendStatus(404);
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  const result = quotes.delete(id); 
  result ? res.json(result) : res.sendStatus(404);
});

module.exports = router;
