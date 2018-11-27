console.log('Starting app.js');

const { appendFileSync } = require('fs');
const { userInfo } = require('os');
const _ = require('lodash');
const notes = require('./notes');

const { username } = userInfo();
console.log(`Result: ${notes.add(8, 2)}`);
console.log(_.isString('Stef'));
console.log(_.isString(true));

appendFileSync('greeting.txt', `Hello ${username}! I'm ${notes.age} years old. You've added a ${notes.addNote()}.`);
