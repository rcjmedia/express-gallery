const express = require('express');
const app = express();
const bp = require('body-parser');
const exphbs = require('express-handlebars')
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9090;

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  // use the knex variable above to create dynamic queries
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});