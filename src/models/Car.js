const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: String,
    brand: String,
    price: String,
    age: Number,
    owner_id: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Car', carSchema);