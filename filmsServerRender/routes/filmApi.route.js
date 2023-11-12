const router = require("express").Router();
const fetchFilm = require('../utils/fetchFilm');
const {getFilm, postFilm} = require('../controllers/filmApi.controller.js');

router.get('/', (req, res) => {
    res.status(200).render('home');
})

router.get("/film/:title", getFilm);

router.post('/film', postFilm);

module.exports = router;