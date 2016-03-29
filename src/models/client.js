var mongoose = require('mongoose');

// todo autogenerate client id and secret for improved security
var ClientSchema = new mongoose.Schema({
    name: {type: String, unique: true, require: true},
    id: {type: String, required: true},
    secret: {type: String, required: true},
    userId: {type: String, required: true}
});

module.exports = mongoose.model('Client', ClientSchema);