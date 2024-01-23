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
    });

    // After all tests, teardown the testing environment
    after(async () => {
        await teardown();
    });

    describe('GET /api/polls/:pollId', () => {
        it('should get a poll by its ID', async () => {
            const testPoll = {
                pollId: 1,
                pollName: 'Test Poll',
                question: 'Test Question',
                options: [
                    { optionId: 1, optionText: 'Option 1', votes: 0 },
                    { optionId: 2, optionText: 'Option 2', votes: 0 },
                ],
            };

            await pollModel.create(testPoll);

            // send the request to the API endpoint
            const res = await chai.request('http://localhost:4494').get('/api/polls/1');

            // check for the expected response
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.pollId).to.equal(testPoll.pollId);
            chai.expect(res.body.pollName).to.equal(testPoll.pollName);
            chai.expect(res.body.question).to.equal(testPoll.question);
            // check options
            chai.expect(res.body.options).to.be.an('array').with.lengthOf(testPoll.options.length);
            res.body.options.forEach((option, index) => {
                chai.expect(option.optionId).to.equal(testPoll.options[index].optionId);
                chai.expect(option.optionText).to.equal(testPoll.options[index].optionText);
                chai.expect(option.votes).to.equal(testPoll.options[index].votes);
            });
        });
    });
});