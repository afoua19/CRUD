const express = require('express');
const connection = require("./connection");
const appareilRoute = require('./routes/appareilRoutes');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/appareilRoutes',appareilRoute);

module.exports = app;