#! /usr/bin/env node

const package = require(`${__dirname}/package.json`);

console.log('package', package);

console.log('__dirname', __dirname);
const shell = require('shelljs');

console.log('⚡️BLITZ SERVER⚡️ [Starting]');
shell.exec(`node ${__dirname}/index.js`);
