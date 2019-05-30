//controller bole end point hit korle ki hobe

// implement the controllers we referenced them in the routes

const Product = require('../models/product.model')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//it simply reads an existing product from the product id being sent in the request.
exports.product_details = function(req, res) {
    Product.findById(req.params.id, function(err, product){
        if(err)
            return next(err)
        res.send(product);
    })
};

exports.product_update = function(req, res){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product){
        if(err)
            return next(err)
        res.send('Product Updated')
    })
};

exports.product_delete = function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err){
        if(err)
            return next(err)
        res.send('Deleted!')
    })
};