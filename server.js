// Dependencies
const express = require('express');


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express server
const app = express();

// PORT
const PORT = process.env.PORT || 3001;