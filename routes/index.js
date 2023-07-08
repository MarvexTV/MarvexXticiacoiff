const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log("Je passe par la route /");

  res.render('index.hbs');
});

router.get('/politique', (req, res) => {
  console.log("Je passe par la route /politique");

  res.render('politique.hbs');
});

router.get('/contact', (req, res) => {
  console.log("Je passe par la route /contact");

  res.render('contact.hbs');
});

router.get('/reserver', (req, res) => {
  console.log("Je passe par la route /reserver");

  res.render('reserver.hbs');
});

router.get('/service', (req, res) => {
  console.log("Je passe par la route /service");

  res.render('service.hbs');
});
module.exports = router;
