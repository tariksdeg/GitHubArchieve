const Joi = require('joi')
const mongoose = require('mongoose')
const {genreSchema} = require('./genre')

const Movie = mongoose.model('Movies',new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255,
    },
    genre:{
        type:genreSchema,
        required:true
    },
    numberInStock: {
        type: Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min:0,
        max:255
    }
}))

function validateMovie(movie){
    const schema={
        title:Joi.String().min(5).max(50).required(),
        genreId:Joi.objectId().required(),
        numberInStock:Joi.Number().min(0).required(),
        dailyRentalRate:Joi.Number().min(0).required(),
    }
    return Joi.validate(movie, schema)
}

module.exports.Movie = Movie
module.exports.validate = validateMovie