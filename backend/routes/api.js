const router = require('express').Router(); // create a router, import express

// static placeholder poll
let polls = [
    {
		pollId: 1,
		pollName: "Premier League Winner",
		question: "Who will win the Premier League?",
		options: [
			{ optionId: 1, optionText: "Manchester City", votes: 0 },
			{ optionId: 2, optionText: "Arsenal", votes: 0 },
			{ optionId: 3, optionText: "Liverpool", votes: 0 }
		]
    }
];

let votes = []; // saving votes to a list - no persistance

// Get a poll by its ID
router.get('/polls/:pollId', (req, res) => {
	const pollId = parseInt(req.params.pollId);
    const poll = polls.find(poll => poll.pollId === pollId);
	// if the poll doesn't exist - return an error message
    if (!poll) {
		return res.status(404).json({ error: 'Poll not found' });
    }
    res.json(poll);
});

// Post a vote
router.post('/votes', (req, res) => {
    const { pollId, optionId } = req.body; // destructure out of the body
    const poll = polls.find(poll => poll.pollId === pollId);
	// if the poll doesn't exist - return an error message
    if (!poll) {
        return res.status(404).json({ error: 'Poll not found' });
    }
    const option = poll.options.find(opt => opt.optionId === optionId);
	// if the chosen option doesn't exist - return an error message
    if (!option) {
		return res.status(400).json({ error: 'Invalid option' });
    }
	// increment the vote count
    option.votes++;
    votes.push({ pollId, optionId });
	// return a successul response
    res.json({ success: true });
});

// Get all votes for a specific poll by ID
router.get('/votes/:pollId', (req, res) => {
	const pollId = parseInt(req.params.pollId);
	// filter the votes for the specified poll ID
	const pollVotes = votes.filter(vote => vote.pollId === pollId);
	res.json(pollVotes);
});

module.exports = router; // export router from the file