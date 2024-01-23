const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { setup, teardown } = require('./setup');
const { pollModel } = require('../src/db');

describe('API Tests', () => {

    let app, mongoServer;

    // Before all tests, set up the testing environment
    before(async () => {
        const setupResult = await setup();
        app = setupResult.app;
        mongoServer = setupResult.mongoServer;

        testPoll1 = {
            pollId: 1,
            pollName: 'Test Poll',
            question: 'Test Question',
            options: [
                { optionId: 1, optionText: 'Option 1', votes: 0 },
                { optionId: 2, optionText: 'Option 2', votes: 0 },
            ],
        };

        testPoll2 = {
            pollId: 2,
            pollName: 'Test Poll 2',
            question: 'Test Question 2',
            options: [
                { optionId: 1, optionText: 'Option A', votes: 3 },
                { optionId: 2, optionText: 'Option B', votes: 7 },
                { optionId: 3, optionText: 'Option C', votes: 2 },
            ],
        };

        await pollModel.create(testPoll1);
        await pollModel.create(testPoll2);
    });

    // After all tests, teardown the testing environment
    after(async () => {
        await teardown();
    });

    describe('GET /api/polls/:pollId', () => {
        it('should get a poll by its ID', async () => {

            // send the request to the API endpoint
            const res = await chai.request('http://localhost:4494').get('/api/polls/1');

            // check for the expected response
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.pollId).to.equal(testPoll1.pollId);
            chai.expect(res.body.pollName).to.equal(testPoll1.pollName);
            chai.expect(res.body.question).to.equal(testPoll1.question);
            // check options
            chai.expect(res.body.options).to.be.an('array').with.lengthOf(testPoll1.options.length);
            res.body.options.forEach((option, index) => {
                chai.expect(option.optionId).to.equal(testPoll1.options[index].optionId);
                chai.expect(option.optionText).to.equal(testPoll1.options[index].optionText);
                chai.expect(option.votes).to.equal(testPoll1.options[index].votes);
            });
        });

        it('should return 404 for a non-existent poll', async () => {
            const res = await chai.request('http://localhost:4494').get('/api/polls/999');
            
            chai.expect(res).to.have.status(404);
            chai.expect(res.body).to.deep.equal({ error: 'Poll not found' });
        });
    });

    describe('POST /api/votes', () => {
        it('should post a vote and return success', async () => {
            const testVote = {
                pollId: 1,
                optionId: 1
            };

            const res = await chai.request('http://localhost:4494').post('/api/votes').send(testVote);

            chai.expect(res).to.have.status(201);
            chai.expect(res.body).to.deep.equal({ success: true });
        });

        it('should return 400 for missing fields', async () => {
            // vote missing poll ID
            const incompleteVote1 = { optionId: 1 }; 
            // vote missing option ID
            const incompleteVote2 = { pollId: 1 }; 
    
            const res1 = await chai.request('http://localhost:4494').post('/api/votes').send(incompleteVote1);
            const res2 = await chai.request('http://localhost:4494').post('/api/votes').send(incompleteVote2);
    
            chai.expect(res1).to.have.status(400);
            chai.expect(res1.body).to.deep.equal({ error: 'Both pollId and optionId are required' });
    
            chai.expect(res2).to.have.status(400);
            chai.expect(res2.body).to.deep.equal({ error: 'Both pollId and optionId are required' });
        });
    });

    describe('GET /api/votes/:pollId', () => {
        it('should get all votes for a specific poll by ID', async () => {
            const res = await chai.request('http://localhost:4494').get('/api/votes/2');

            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.deep.equal([
                { optionId: 1, optionText: 'Option A', votes: 3 },
                { optionId: 2, optionText: 'Option B', votes: 7 },
                { optionId: 3, optionText: 'Option C', votes: 2 }
            ]);
        });

        it('should return 404 for votes of a non-existent poll', async () => {
            const res = await chai.request('http://localhost:4494').get('/api/votes/999');
            
            chai.expect(res).to.have.status(404);
            chai.expect(res.body).to.deep.equal({ error: 'Poll not found' });
        });
    });
});