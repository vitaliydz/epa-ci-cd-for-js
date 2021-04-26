var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Return all quotes');
});

router.post('/', function(req, res, next) {
  res.send('Create quote');
});

router.get('/:id', function(req, res, next) {
  res.send('Return a quote by id');
});

router.put('/:id', function(req, res, next) {
  res.send('Updates a quote by id');
});

router.delete('/:id', function(req, res, next) {
  res.send('Delete a quote');
});

module.exports = router;
