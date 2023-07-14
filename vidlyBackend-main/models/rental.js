const Joi = require("joi");
const mongoose = require("mongoose");
const moment = require('moment')


const rentalSchema = new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlenght: 50,
      },
      isGold: {
        type: Boolean,
        default: false,
      },
      phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlenght: 50,
      },
    }),
    required: true,
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255,
      },
      dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255,
      },
    }),
    required:true
  },
  dateOut:{
    type:Date,
    required:true,
    default:Date.now
  },
  dateReturned:{
    type:Date
  },
  rentalFee:{
    type: Number,
    min:0
  }
});

rentalSchema.statics.lookup = function(customerId, movieId) {   // statics method
  return this.findOne({
    'customer._id': customerId,
    'movie._id': movieId,
  });
}

rentalSchema.methods.return = function() {     // instance method (çünkü bir rental obje üzerinde uygun olması gerekiyor)
  this.dateReturned = new Date();    

  const rentalDays = moment().diff(this.dateOut, 'days');  // moment şuanki zamanı veriyor
  this.rentalFee = rentalDays * this.movie.dailyRentalRate;
}

const Rental = mongoose.model("Rental", rentalSchema);

function validateRental(rental) {
  const schema = {
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
  };

  return Joi.validate(rental, schema);
}

module.exports.Rental = Rental;
module.exports.validate = validateRental;
