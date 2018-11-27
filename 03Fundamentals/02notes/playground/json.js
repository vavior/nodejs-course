// const obj = {
//     name: 'Stef'
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj);
// console.log(stringObj);

// const personString = '{"name": "Jérôme", "age": 25}';
// const personObj = JSON.parse(personString);
// console.log(personString);
// console.log(typeof personObj);
// console.log(personObj.age);

const fs = require('fs');

const originalNote = {
    title: 'some title',
    body: 'some body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
