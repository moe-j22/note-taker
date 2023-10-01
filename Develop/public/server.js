const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

//parsing JSON data
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

//api routes
app.get('/api/notes', (req, res) => {
  // Read the db.json file and return its content as JSON
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
  res.json(notes);
});

app.post('/api/notes', (req, res) => {

  const newNote = req.body;
  newNote.id = Date.now(); // Generate a unique ID 
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes));
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  // delete the corresponding note, and return success
  const noteId = parseInt(req.params.id);
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
  notes = notes.filter((note) => note.id !== noteId);
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes));
  res.json({ success: true });
});

// Start the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
