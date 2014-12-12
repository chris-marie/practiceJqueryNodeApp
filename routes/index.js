var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


var contacts = [];

router.post('contacts', function (req, res) {
  contacts.push(req.body);
  res.status(201).json({ message: 'Added contact successfully'});
});

module.exports = router;
