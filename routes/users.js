const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/adduser', (req, res)=>{
    let newUser = User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile_number: req.body.mobile_number,
        email: req.body.email,
    });

    User.ADD_one_user(newUser, (err, user)=>{
        if(err) res.json({success: false, msg: 'Failed to add user: '+err});
        else res.json({success: true, msg: 'User added', user: user});
    });
});

module.exports = router;