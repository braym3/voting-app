const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const app = require('../src/index'); // import the app

let mongoServer;

// setup function - runs before tests
async function setup() {
    mongoServer = new MongoMemoryServer();
    await mongoServer.start();

    // get the connection URI for the in-memory server
    const mongoUri = mongoServer.getUri();

    console.log('MongoDB URI:', mongoUri);

    // connect mongoose to the in-memory server
    await mongoose.connect(mongoUri);

    return { app, mongoServer }; // Return necessary objects for testing
}

// teardown function - runs after tests
async function teardown() {
    // disconnect mongoose from the in-memory server
    await mongoose.disconnect();
  
    // stop the mongoDB memory server
    await mongoServer.stop();
}

module.exports = { setup, teardown };