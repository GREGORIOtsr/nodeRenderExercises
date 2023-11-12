const express = require('express')
const app = express()
const port = 3000

const morgan = require('./middleware/morgan')
const filmRoutes = require('./routes/filmApi.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static("public"));

app.use('/', filmRoutes);

app.get('*', (req, res) => {
  res.status(404).render('404');
})

app.listen(port, () => {
  console.log(`>Listening on http://localhost:${port}`)
})
