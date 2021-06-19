//load express
const express = require('express');
//create express app
const app = express();
const PORT = 3000;
const veggies = require('./models/veggie');

// Database setup


//congiure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//mount middleware (app.use)
app.use((req, res, next) =>{
  console.log('HEEEEYYYYY I am middleware, running before all routes');
  next()
});

app.use(express.urlencoded({extended: true}));  //body parser?

/*****************
Mount INDUCES Routes
******************/
/*
Index
*/
//define a "root" route directly on app. This is callback function AKA route handler
app.get('/', (req, res) => {
  res.send('<h1>This is veggie App!</h1><a href="/veggies/">Veggies Page</a>');
})

app.get('/veggies', (req, res) => {
  res.render('Index', {veggies: veggies});
});
/*
New         //Just renders the page. SHows the form to input data
*/
app.get('/veggies/new', (req, res) => {
  res.render('New');
});

/*
Delete
*/
/*
Update
*/
/*
Create      //Recieves the info and pushes the info. Action that actually posts the data to server
*/
app.post('/veggies', (req, res) => {
  if(req.body.likeToEat === 'on'){ //if user checks, req.body.likeToEat is set to 'on'
      req.body.likeToEat = true;
    } else{                         //if not checked, req.body.likeToEat is undefinded
      req.body.likeToEat = false;
    }
  veggies.push(req.body)
  res.redirect('/veggies')
})

/*
Edit
*/
/*
Show
*/
app.get('/veggies/:indexOfVeggiesArray', (req, res) => {
  res.render('Show', {
    veggie: veggies[req.params.indexOfVeggiesArray]
  })
})





//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`);
})
