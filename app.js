const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// API Routes
const users = require('./routes/users');

const app = express();
const port = 3000;


mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
    console.log('Connected: '+config.database);
    
});
mongoose.connection.on('error', (err)=>{
    console.log('DB ERROR: '+err);
    
});

// Front End folder
app.use(express.static(path.join(__dirname, 'public')));

//CORS
app.use(cors());

//Body Parser
app.use(bodyParser.json());

// Use API Routes
app.use('/api/user',users);


app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
// /route
app.get('/', (req, res)=>{
    res.send('Invalid');
})


app.listen(port, ()=>{
    console.log('Server started on port: '+port);
    
});