const express = require('express');
const {json} = require('express');
const morgan = require('morgan');
const empledosRoutes = require('../routes/empleados-routes');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/empleados',empledosRoutes);

module.exports = app; 
