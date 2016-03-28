var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    name: String,
    eventstart: Date,
    eventend: Date,
    signstart: Date,
    signend: Date,
    canceldeadline: Date,
    description: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Event', EventSchema);