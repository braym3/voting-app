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


// Get a poll
router.get('/polls/:pollId', (req, res) => {
    const pollId = parseInt(req.params.pollId);
    const poll = polls.find(poll => poll.pollId === pollId);
    if (!poll) {
      return res.status(404).json({ error: 'Poll not found' });
    }
    res.json(poll);
  });

module.exports = router; // export router from the file