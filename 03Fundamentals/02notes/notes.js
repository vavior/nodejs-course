console.log('Notes starting');
const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = { title, body };

    if (notes.some(({ title: noteTitle }) => noteTitle === title)) return;
    saveNotes([...notes, note]);

    return note;
};

const getAll = () => {
    console.log('===========NOTES LIST===========');
    const notes = fetchNotes();
    notes.forEach((note) => {
        logNote(note);
    });

};

const getNote = (title) => {
    const notes = fetchNotes();
    const note = notes.filter(({ title: noteTitle }) => noteTitle === title);
    if (note.length === 0) {
        console.log('No note has this title');
        return;
    }
    logNote(note[0]);
};

const logNote = (note) => {
    debugger;
    console.log('-----NOTE-----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('---------------');
};

const removeNote = (title) => {
    const notes = fetchNotes();
    saveNotes(notes.filter(({ title: noteTitle }) => noteTitle !== title));
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
