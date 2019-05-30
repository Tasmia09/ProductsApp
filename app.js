const express = require('express')
const bodyParser = require('body-parser')

//import routes for the products
const product = require('./routes/product.route')

//initialize express app
const app = express()


//Next step would be dedicating a port number and telling our express app to listen to that port.


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://tasmia:8122110@product-app-tkgzt.mongodb.net/test?retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product)

let port = 1234

app.listen(port, () => {
    console.log('server is up and running on port '+port)
});

