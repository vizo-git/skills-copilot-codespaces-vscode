// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Create app
const app = express();

// Setup middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

// Setup routes
app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});