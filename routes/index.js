var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    User.findOne({}, function (err, doc) { //don`t use var user=User.findOne() because this is asynchronous task so need callback function that have 2 parameters: error and document
        if(err){
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});//rendering page need to do inside the callback
        //don`t use: {email: doc} it will show whole object
        // This is { messages: [], _id: 5ae78614f92a722d9080fb6f, firstName: 'Ivan', lastName: 'Ivanenko', password: 'super-secret', email: 'test@mail.com', __v: 0 }
        //before the task will finish
    });
});

/*
router.get('/message, function(req, res, next) {
    res.render('node', {message: 'Hello'});
});
*/
/*
router.get('/message/:mesg', function(req, res, next) {
    res.render('node', {message: req.params.mesg});
});
*/
/*
router.post('/message', function(req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});
*/
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({//to the constructor we pass js object where we configure this object
        firstName: 'Ivan',
        lastName: 'Ivanenko',
        password: 'super-secret',
        email: email
    });
    user.save()
        .then(() => console.log('saved'));//saving user to database
    res.redirect('/');
});

module.exports = router;
