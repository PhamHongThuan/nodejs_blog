const express = require('express')
const handlebars  = require('express-handlebars');
const path = require('path');
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
const port = 3000

app.use(express.static(path.join(__dirname, 'public\\')))

//Template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// console.log(path.join(__dirname, 'resources\\views'));

// Routes
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})