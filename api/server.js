const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); 


const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');

const server = express();


//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());


// Routes
server.use('/api/auth', authRouter);

// sanity check
server.get('/', (req, res) => {
    res.status(200).json({ api: 'Running' });
  });



module.exports = server;