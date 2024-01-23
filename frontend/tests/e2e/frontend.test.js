const assert = require('assert');
const { remote } = require('webdriverio');

describe('Voting App', () => {
  it('should load the VotingPage and submit a vote', async () => {
    const browser = await remote({
      capabilities: {
        browserName: 'chrome',
      },
    });

    // open the app
    await browser.url('http://localhost:8081');

    // Perform actions on the VotingPage
    const votingPageTitle = await browser.getTitle();
    assert.strictEqual(votingPageTitle, 'Voting App');

    // Replace the following with your actual test steps
    // For example, finding elements, interacting with them, and making assertions.

    // Close the browser
    await browser.deleteSession();
  });
});