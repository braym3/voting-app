const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'test') {
    // Connect to the production database only if not running tests
    mongoose.connect('mongodb://127.0.0.1:27017/voting-app', {})
      .then(() => console.log('Connected to MongoDB'))
      .catch(() => console.log('MongoDB connection error'));
}

// define the schema for a poll
const optionSchema = new mongoose.Schema({
    optionId: { type: Number, required: true},
    optionText: { type: String, required: true },
    votes: { type: Number, default: 0 },
});

const pollSchema = new mongoose.Schema({
    pollId: { type: Number, required: true },
    pollName: { type: String, required: true },
    question: { type: String, required: true },
    options: {
        type: [optionSchema],
        validate: [
            (options) => options.length >= 2,
            'There must be at least 2 options.',
        ],
        validate: [
            (options) => options.length <= 5,
            'There is a maximum of 5 options.',
        ],
    },
});

// create poll model - allows you to interact with the collection
const pollModel = mongoose.model('Poll', pollSchema);

module.exports = { pollModel };