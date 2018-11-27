var express = require('express');
var router = express.Router();
const ctrlMasters = require('../controllers/masters');

/* GET masters listing. */
router.get('/', ctrlMasters.masters);

module.exports = router;
