const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();
const port = 3000;


mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
    console.log('Connected: '+config.database);
    
});
mongoose.connection.on('error', (err)=>{
    console.log('DB ERROR: '+err);
    
});
//CORS
app.use(cors());

//Body Parser
app.use(bodyParser.json());

// /route
app.get('/', (req, res)=>{
    res.send('Invalid');
})

// Front End folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log('Server started on port: '+port);
    
});