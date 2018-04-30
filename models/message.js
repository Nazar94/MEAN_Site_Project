var mongoose = require('mongoose');
var Schema=mongoose.Schema;//helper object

var schema = new Schema({//expects for object message with 2 field content and user
    content: {type: String, required: true},//js object defining how this field should look like
    user: {type: Schema.Types.ObjectId, ref: 'User'}// not use only ObjectId use Schema.Types.ObjectId-need to set internal type for mongoose using to
    // to store the ids of different objects
    /*// because user can have a lot of messages need to add array
     //messages will be an array of the strings and array of IDs
     //messages property //ref: 'Message'// will have the refference to messages collection Schema
     //do the same in message schema//ref: 'User'*/

});

//we have the blueprint but we need a model
//we can`t instantiate a blueprint
module.exports = mongoose.model('Message', schema);//model()-expects 2 arguments name of this model, and the schema we wanna use for this model
//mongoose will create a collection from 'Message'->messages

