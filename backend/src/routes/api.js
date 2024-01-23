const router = require('express').Router(); // create a router, import express
const { pollModel } = require('../db');

// Get a poll by its ID
router.get('/polls/:pollId', async (req, res, next) => {
	const pollId = parseInt(req.params.pollId);

	try{
		const poll = await pollModel.findOne({ pollId });
		// if the poll doesn't exist - return an error message
		if (!poll) {
			return res.status(404).json({ error: 'Poll not found' });
		}
		res.json(poll);
	} catch (err) {
		next({ status: 500, msg: 'Oops an error has occured!'});
	} 
});

// Post a vote
router.post('/votes', async (req, res, next) => {
    const { pollId, optionId } = req.body; // destructure out of the body

	try{
		// check for missing fields
        if (!pollId || !optionId) {
            return res.status(400).json({ error: 'Both pollId and optionId are required' });
        }

		const poll = await pollModel.findOneAndUpdate(
            { pollId, 'options.optionId': optionId },
            { $inc: { 'options.$.votes': 1 } },
            { new: true }
        );
		// if the poll or option doesn't exist - return an error message
		if (!poll) {
			return res.status(404).json({ error: 'Poll not found' });
		}

		// return a successul response
		res.status(201).json({ success: true });
	} catch (err) {
		next({ status: 500, msg: 'Oops an error has occured!'});
	}
});



// Get all votes for a specific poll by ID
router.get('/votes/:pollId', async (req, res, next) => {
	const pollId = parseInt(req.params.pollId);

	try{
		const poll = await pollModel.findOne({ pollId });
		// if the poll doesn't exist - return an error message
		if (!poll) {
			return res.status(404).json({ error: 'Poll not found' });
		}

        // extract the options from the poll (excluding _id and __v)
        const optionsWithVotes = poll.options.map((option) => {
            const { _id, __v, ...rest } = option.toObject();
            return rest;
        });
		res.json(optionsWithVotes); 
	} catch (err) {
		next({ status: 500, msg: 'Oops an error has occured!'});
	}
});

module.exports = router; // export router from the file