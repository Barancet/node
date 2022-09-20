const { response } = require("express");
const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello !</h1>");
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => { 
    console.log(note)
    return note.id === id});

  if (note) {
    res.json(note);
  } else {
    res.status(400).send("ID Does not exist");
  }

  //console.log(note, "note");
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

const PORT = 3001;
app.listen(PORT);
console.log(`listening on port ${PORT}`);
