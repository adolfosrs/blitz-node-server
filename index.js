'use strict';

const http = require('http');
const express = require('express');
const RateLimit = require('express-rate-limit');

const apiLimiter = new RateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 10,
});

const app = express();

app.use('/', apiLimiter);
app.use('/v0', require('./src/routes.js'));

const port = process.env.PORT || 8099;
const server = http.createServer(app);
server.listen(port);

console.log(`Started on Port ${port}`);
