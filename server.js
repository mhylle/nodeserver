// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var eventController = require('./src/controllers/event');
var userController = require('./src/controllers/user');
var clientController = require('./src/controllers/client');

var passport = require('passport');
var authController = require('./src/controllers/auth');

mongoose.connect('mongodb://localhost:27017/nodeserver');
// Create our Express application
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

app.use(passport.initialize());

// Create our Express router
var router = express.Router();

router.route('/events')
    .post(authController.isAuthenticated, eventController.postEvents)
    .get(authController.isAuthenticated, eventController.getEvent);

router.route('/events/:event_id')
    .get(authController.isAuthenticated, eventController.getEvent)
    .put(authController.isAuthenticated, eventController.putEvent)
    .delete(authController.isAuthenticated, eventController.deleteEvent);

router.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

router.route('/clients')
    .post(authController.isAuthenticated, clientController.postClients)
    .get(authController.isAuthenticated, clientController.getClients);
// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert user on port ' + port);