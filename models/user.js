var mongoose = require('mongoose');
var Schema=mongoose.Schema;//helper object
var mongooseUniqueValidator = require('mongoose-unique-validator');


var schema = new Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    password:{type: String, required:true},
    email:{type: String, required:true, unique: true},//email should be unique// unique-property recognised by mongoose
    //npm install --save mongoose-unique-validator  need to install for validating unique parameters
    //other way unique: true property will not work
    messages:[{type: Schema.Types.ObjectId, ref: 'Message'}]// because user can have a lot of messages need to add array
    //messages will be an array of the strings and array of IDs
    //messages property //ref: 'Message'// will have the refference to messages collection Schema
    //do the same in message schema//ref: 'User'-creating a relation between schemas
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);//creating collection 'users'
