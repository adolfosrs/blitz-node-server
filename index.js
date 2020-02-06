'use strict';

const http = require('http')
const express = require('express');

const app = express();

app.use('/v0', require('./src/routes.js'));

const port = process.env.PORT || 8099;
const server = http.createServer(app);
server.listen(port);

console.log(`Started on Port ${port}`);
