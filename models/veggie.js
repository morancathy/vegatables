const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  color: {type: String, required: true},
  likeToEat: Boolean
});

const Veggie = mongoose.model('Veggie', veggieSchema);

module.exports = Veggie;

// const veggies = [
//   {
//     name: 'veggie1',
//     color: 'color of veggie1',
//     likeToEat: true
//   },
//   {
//     name: 'veggie2',
//     color: 'color of veggie2',
//     likeToEat: false
//   }
// ];
//
// module.exports = veggies;
