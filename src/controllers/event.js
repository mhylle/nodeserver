// Load required packages
var Event = require('../models/event');

// Create endpoint /api/events for POSTS
exports.postEvents = function (req, res) {
    // Create a new instance of the Event model
    var event = new Event();

    // Set the event properties that came from the POST data
    event.name = req.body.name;
    event.eventstart = req.body.eventstart;
    event.eventend = req.body.eventend;
    event.signstart = req.body.signstart;
    event.signend = req.body.signend;
    event.canceldeadline = req.body.canceldeadline;
    event.description = req.body.description;

    // Save the event and check for errors
    event.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.json({message: 'Event added!', data: event});
    });
};

// Create endpoint /api/events for GET
exports.getEvents = function (req, res) {
    // Use the Event model to find all events
    Event.find(function (err, events) {
        if (err) {
            return res.send(err);
        }

        res.json(events);
    });
};

// Create endpoint /api/events/:event_id for GET
exports.getEvent = function (req, res) {
    // Use the Event model to find a specific event
    Event.findById(req.params.event_id, function (err, event) {
        if (err) {
            return res.send(err);
        }

        res.json(event);
    });
};

// Create endpoint /api/events/:event_id for PUT
exports.putEvent = function (req, res) {
    // Use the Event model to find a specific event
    Event.findById(req.params.event_id, function (err, event) {
        if (err) {
            return res.send(err);
        }

        event.name = req.body.name;
        event.eventstart = req.body.eventstart;
        event.eventend = req.body.eventend;
        event.signstart = req.body.signstart;
        event.signend = req.body.signend;
        event.canceldeadline = req.body.canceldeadline;
        event.description = req.body.description;
        // if (req.body.user) {
        //
        // }

        // Save the event and check for errors
        event.save(function (err) {
            if (err) {
                return res.send(err);
            }
            // Event.find({})
            //     .populate()
            //     .exec(function (error, events) {
            //         console.log(JSON.stringify(events, null, '\t'))
            //     });

            res.json(event);
        });
    });
};

// Create endpoint /api/events/:event_id for DELETE
exports.deleteEvent = function (req, res) {
    // Use the Event model to find a specific event and remove it
    Event.findByIdAndRemove(req.params.event_id, function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({message: 'Event removed!'});
    });
};