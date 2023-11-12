const fetchFilm = require('../utils/fetchFilm');

async function getFilm (req, res) {
    const title = req.params.title;
    try {
        let film = await fetchFilm(title);
        if (film) {
            res.status(200).render('film', {title: film.Title, poster: film.Poster, director: film.Director, year: film.Year, genre: film.Genre, plot: film.Plot, imdbID: film.imdbID})
        } else {
            res.status(200).render('film', {title: 'Not found'});
        }
    } catch (error) {
        res.status(404).render('404');
    }
    
}

function postFilm (req, res) {
    res.redirect(`/film/${req.body.title}`)
}

module.exports = {getFilm, postFilm};

// {Title, Poster, Director, Year, Genre, Plot, imdbID}