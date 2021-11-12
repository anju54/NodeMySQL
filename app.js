const express = require('express');
var app = express();
const connection = require('./util/db');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./routes/user');

app.use('/user',userRoutes);

app.listen(8086);