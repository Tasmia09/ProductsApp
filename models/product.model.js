const mongoose = require('mongoose')
const Schema = mongoose.Schema

//defining schema for our model
let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
});

//export the model
//convention - singular dibo plural korbe mongo 
module.exports = mongoose.model('Product', ProductSchema)