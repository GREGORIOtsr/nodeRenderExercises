const router = require('express').Router();
const getView = require('../controllers/controllers')

router.get("/", getView);

router.get("/about", getView);

router.get("/location", getView);

router.get("/mission", getView);

router.get("/contact", getView);

module.exports = router;