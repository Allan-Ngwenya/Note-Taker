// Dependencies
const express = require('express');


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express server
const app = express();

// PORT
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

// JSON data
app.use(express.json());


app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
	console.log(`API server is ready on port ${PORT}!`);
});