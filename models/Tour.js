const mongoose = require('mongoose')

//Schema
const tourSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0
    },
    viewCount: {
        type: Number,
        require: true,
        min: 0,
        default: 0
    }
})

// Schema -> Model -> Query
 const Tour = mongoose.model('Tour', tourSchema)

 module.exports = Tour