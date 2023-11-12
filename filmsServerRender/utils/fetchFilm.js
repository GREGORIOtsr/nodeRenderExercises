require("dotenv").config();

const apiKey = process.env.API_KEY;

// Fetch
// https://www.omdbapi.com/?t=<Movie Title>&apikey=<API_KEY>

async function fetchFilm(title) {
    let res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    let film = await res.json();
    if (film.Response == 'False') {
        return null;
    }
    return film;
}

module.exports = fetchFilm;