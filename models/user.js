const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    mobile_number: {
        type: String
    },
    email:{
        type: String
    }
});

const User = module.exports = mongoose.model('users', UserSchema, 'users');

module.exports.ADD_one_user = function(newUser, callback){
    newUser.save(callback);
}
module.exports.UPDATE_one_user = function (user, callback){
    
    
    const userid = user._id;
    User.findOneAndUpdate({'_id':userid}, {
        $set:{
            first_name: user.first_name,
            last_name: user.last_name,
            mobile_number: user.mobile_number,
            email: user.email
        }
    }).exec(callback);
}
module.exports.GET_all_users = function(callback){
    User.find({})
    .exec(callback);
}
module.exports.GET_all_users_by_email = function(email, callback){
    const query = {email: email};
    User.find(query)
    .exec(callback);
}