
require('dotenv').config();
//load express
const express = require('express');
//create express app
const app = express();
const PORT = 3000;
const Veggie = require('./models/veggie');

// Database setup
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.once('open', () => {    //will eventualy delete
  console.log('connected to mongo');
})

//congiure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//mount middleware (app.use)
app.use((req, res, next) =>{
  console.log('HEEEEYYYYY I am middleware, running before all routes');
  next()
});

app.use(express.urlencoded({extended: true}));  //body parser?

//seed Route
app.get('/veggies/seed', (req, res) => {
  Veggie.create([
    {
      name: 'califlower',
      color: 'whiteish',
      likeToEat: true
    },
    {
      name: 'carrot',
      color: 'orange',
      likeToEat: true
    }
  ], (err, data) => {
    res.redirect('/veggies');
  });
});




/*****************
Mount INDUCES Routes
******************/
/*
Index
*/
//define a "root" route directly on app. This is callback function AKA route handler
app.get('/', (req, res) => {
  res.send('<h1>This is the Veggie App!</h1><a href="/veggies/">Veggies Page</a>');
})

app.get('/veggies', (req, res) => {
  Veggie.find({}, (error, allVeggies) => {
    res.render('Index', {
      veggies: allVeggies
    })
  })
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
  Veggie.create(req.body, (err, createdVeggie) => {
    if(err) {
      res.status(404).send({
        msg: err.message
      })
    } else{
      console.log(createdVeggie);
      res.redirect('/veggies');
    }
  })
  // Veggies.push(req.body)
  // res.redirect('/veggies')
})

/*
Edit
*/
/*
Show
*/
app.get('/veggies/:indexOfVeggiesArray', (req, res) => {
  Veggie.findById(req.params.indexOfVeggiesArray, (err, foundVeg) => {
    res.render('Show', {
      veggie: foundVeg,
    })
  });
});





//tell app to listen on port 3000 for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}`);
})
