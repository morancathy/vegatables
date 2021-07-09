const Veggie = require('./models/veggie');

const dataController = {

  index(req, res, next){
    Veggie.find({}, (err, allVeggies) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.products = allVeggies;
        next();
      }
    })
  },


  show(req, res, next){
    Veggie.findById(req.params.id, (err, foundVeggie)=>{
      if(err){
        res.status(404).send({
            msg: err.message
        })
      } else {
        res.locals.data.product = foundVeggie;
        next();
      }
    })
  },

  create(req, res, next){
      if(req.body.likeToEat === 'on'){
          req.body.likeToEat = true;
        } else{
          req.body.likeToEat = false;
        }
    Veggie.create(req.body, (err, createdVeggie) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdVeggie;
        next();
      };
    });
  },


  destroy(req, res, next){
    Veggie.findByIdAndDelete(req.params.id, (err, deletedVeggie) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else{
        res.locals.data.product = deletedVeggie;
        next();
      }
    })
  },

  update(req, res, next){
    Veggie.findByIdAndUpdate(req.params.id, {$inc:{'req.params.id.qty' : 1}}, {new: true}, (err, updatedQty) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        req.params.id.qty = req.params.id.qty - 1;
      }
    })


    Veggie.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct;
        next();
      }
    })
  }
};

module.exports = dataController;
