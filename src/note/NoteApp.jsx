import { NotesContext, NotesDispatchContext } from "./NoteContext";
import { NoteForm, NoteFormContext } from "./NoteForm";
import { NoteList, NoteListContext } from "./NoteList";
import { useImmer, useImmerReducer } from "use-immer";

let id = 1;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JS", done: false },
  { id: id++, text: "Learn React", done: false },
];

export const NoteApp = () => {
  const [notes, setNotes] = useImmer(initialNotes);

  const handleAddNote = (text) => {
    setNotes((draft) => {
      draft.push({ id: id++, text: text, done: false });
    });
  };

  const handleChangeNote = (note) => {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id);
      draft[index] = note;
    });
  };

  const handleDeleteNote = (note) => {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id);
      draft.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

//useReducer : untuk menggantikan useState
//inisiasi fungsi notesReducer
const notesReducer = (notes, action) => {
  if (action.type === "ADD_NOTE") {
    notes.push({ id: id++, text: action.text, done: false });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
};

export const NoteAppReducer = () => {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  const handleAddNote = (text) => {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  };

  const handleChangeNote = (note) => {
    dispatch({
      type: "CHANGE_NOTE",
      ...note,
    });
  };

  const handleDeleteNote = (note) => {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  };

  return (
    <div>
      <h1>Note App Reducer</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export const NoteAppContext = () => {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App Context</h1>
          <NoteFormContext />
          <NoteListContext />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
};
