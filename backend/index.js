const express = require('express');
const cors = require('cors');

// create express app
const app = express();
// use body parser - middleware that parses the body to json
app.use(express.json());
app.use(cors());

// logger
const logger = (req, res, next) => {
  console.log('Host: ', req.hostname);
  console.log('Method: ', req.method);
  console.log('Path: ', req.path);
  return next(); // uses next to call next function in the chain - as it doesnt send a response
};
app.use(logger);

const apiRoutes = require('./routes/api');
// import routes
app.use('/api', apiRoutes);

// error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status).send(err.msg);
    // pass the error to the next middleware in the chain
    next(err);
});

// start the server on the given port
const server = app.listen(
  4494,
  () => console.log('server started on ', server.address().port),
); 

// export server
module.exports = server; 