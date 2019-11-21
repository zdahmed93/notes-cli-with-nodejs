const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    const notes = JSON.parse(notesString);
    return notes;
    
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes, null, '\t'));
};

const getAll = () => { fetchNotes() };

const addNote = (title, body) => {
  const notes = fetchNotes();
  const noteToAdd = {
    title,
    body,
  };
  const duplicateNotes = notes.find(note => note.title === title);

  if (!duplicateNotes) {
    notes.push(noteToAdd);
    saveNotes(notes);
    return noteToAdd;
  }
  return undefined;
};

const getNote = (title) => {
  const notes = fetchNotes();
  const note = notes.find(note => note.title === title);

  return note;
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const updatedNotes = notes.filter(note => note.title !== title);
  saveNotes(updatedNotes);

  return notes.length !== updatedNotes.length;
};

const logNote = (note) => {
  console.log('===');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  fetchNotes,
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
