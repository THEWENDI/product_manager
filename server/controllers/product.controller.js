const {Product}  = require("./../models/product.model")



// get all
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))// successful response
        .catch(err => res.status(400).json(err)) // unsuccessful response
}

// get one
module.exports.oneProduct = (req, res) => {
    const id = req.params.id // naming of the params depends on the routes
    Product.findOne({ _id: id }) // _id (from mongoDB) id (from params id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}


// create 
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(response => res.json(response)) // successful create
        .catch(err => res.status(400).json(err)) // unsuccessful create
}

// update - getOne + create
module.exports.updateProduct = (req, res) => {
    const id = req.params.id
    Product.findOneAndUpdate(
        { _id: id }, // filter out the pet with the id
        req.body, // the data to be updated
        { new: true, runValidators: true } // options
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

}

// delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
