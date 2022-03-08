const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Import dotenv module for saving authentication datas in environment variables
const dotenv = require('dotenv');
dotenv.config();

// Access to environment variables
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const contactRoutes = require('./routes/contact');

//Add headers to allow API access from any origin and methods
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.use('/api/contacts', contactRoutes);


mongoose.connect( 
    `mongodb+srv://hzoubeiri:${DB_PASSWORD}@cluster0.7e2xu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
     if (err) {
      return console.log('Connection to MongoDB failed !', err);
    }
    console.log('Connection to MongoDB succeed !');
    }
);





module.exports = app;
