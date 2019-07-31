const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 5000;


// middlewares
app.use(express.static(__dirname + '/public'));


// settings
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// routes
app.get('/', function (req, res) {
  // res.send('Hello World!!');
  res.render('home.hbs', {
    name: 'Edwin',
  });
});

app.get('/about', function (req, res) {
  res.render('about.hbs');
});


// listen on PORT 
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});