//Global Variable
global.persons = [];

// Import packages
const express = require('express')
const morgan = require('morgan')

// App
const app = express()

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Morgan
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

// First route
app.get('/', (req, res) => {
    res.json({ message: 'Friends Relationship!' })
})

// Starting server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);