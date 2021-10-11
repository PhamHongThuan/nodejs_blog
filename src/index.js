const express = require('express')
const handlebars  = require('express-handlebars');
const path = require('path');
const morgan = require('morgan')
const app = express()
const port = 3000

// HTTP Logger
// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public\\')))

// MiddleWare in Express
// Submit theo code form html
app.use(express.urlencoded(
  {
    extended: true
  }
));
// Submit theo code js (XMLHttpRequest, fetch, axios...)
app.use(express.json());

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

app.get('/search', function (req, res) {
  // Lấy ra values query (Các từ kháo càn tìm kiếm)
  // console.log(req.query.q);
  res.render('search');
});

app.post('/search', function (req, res) {
  console.log(req.body);
  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})