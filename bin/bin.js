#! /usr/bin/env node

var lib = require('../index.js');

var answer = lib.foo(process.argv.slice(2));

console.log(answer);