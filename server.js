const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const Redis = require('connect-redis')(session);
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9091;

const { methodSwitch } = require('./assist/serverAssist');
const auth = require('./routes/authentication_routes');
const user = require('./routes/users_routes');
const gallery = require('./routes/gallery_routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(morgan());

app.use(session({
  store: new Redis(),
  secret: 'lollerkates',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(methodOverride((req, res) => {
  return methodSwitch(req, res );
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth);
app.use('/users', user);
app.use('/gallery', gallery);

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('*', (req, res) => {
  res.status(404).render('invalid');
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`)
});
// const express = require('express');
// const app = express();
// const bp = require('body-parser');
// const exphbs = require('express-handlebars')
// const methodOverride = require('method-override');
// const PORT = process.env.EXPRESS_CONTAINER_PORT || 9091;

// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const passport = require('passport');


// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// app.set('view engine', '.hbs')
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   // use the knex variable above to create dynamic queries
//   res.render('index');
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });