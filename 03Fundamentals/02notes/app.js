console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const argv = yargs
    // 1st: argument is the command name
    // 2nd: description of what the command does (for the user)
    // 3d: options object which will contain the required arguments (the key = the property name & the value is another object)
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', { title: titleOptions })
    // enables the user to see the options and commands of the app (by adding --help in the command line)
    .help()
    .argv;
let command = argv._[0]; //process.argv[2];
// console.log('command ', command);
// console.log('Process argv', process.argv);
// console.log('Yargs argv', argv);

switch(command) {
    case 'add': {
        const note = notes.addNote(argv.title, argv.body);
        if (note) console.log('Note:', note.title, note.body);
        else console.log('Title already exists.');
        break;
    }
    case 'read': {
        notes.getNote(argv.title);
        break;
    }
    case 'list': {
        notes.getAll();
        break;
    }
    case 'remove': {
        notes.removeNote(argv.title);
        break;
    }
    default: {
        console.log('command not found');
    }
}
