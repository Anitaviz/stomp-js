#!/usr/bin/env node

var Stomp = require('./stomp');

var client = new Stomp(61613, 'localhost', true);

client.connect();
