var express = require('express');
var router = express.Router();
const banner = require('../controller/banner.js');

/* GET banner listing. */
router.get('/user', banner);

module.exports = router;
