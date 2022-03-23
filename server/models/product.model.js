const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [1, "title must be at least 1 characters long"]
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [0 , "price must be a positive number"]        
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "title must be at least 3 characters long"]
    }
}, {timestamps : true})

module.exports.Product = mongoose.model('Product', ProductSchema)