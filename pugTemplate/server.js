const express = require("express");
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static("public"));

const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`> Listening on http://localhost:${port}`);
});