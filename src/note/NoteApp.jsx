import { NoteForm } from "./NoteForm";
import { NoteList } from "./NoteList";
import { useImmer } from "use-immer";

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
    <>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </>
  );
};
