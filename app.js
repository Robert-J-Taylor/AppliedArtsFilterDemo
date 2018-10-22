const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const products = require('./routes/products')
const config = require('./config/database');
//Conect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
const port = 3000;


//CORS Middleware//
app.use(cors());
//Body Parser Middleware//
app.use(bodyParser.json());


app.use('/products',products);

app.listen(port, ()=> {
    console.log('Server started on port' + port);
});