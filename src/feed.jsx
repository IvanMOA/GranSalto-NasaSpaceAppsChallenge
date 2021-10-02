import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      Author: "William",
      text: "This is my first note!",
      date: "02/10/2021",
    },
    {
      id: nanoid(),
      Author: "Arthur",
      text: "This is my second note!",
      date: "02/10/2021",
    },
    {
      id: nanoid(),
      Author: "William",
      text: "This is my third note!",
      date: "02/10/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "02/10/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      Author: "William",
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
      />
    </div>
  );
};

export default App;
