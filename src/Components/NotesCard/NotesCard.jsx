import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "../../Context/NotesContext";



export default function NoteCard({ note }) {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {note.body.length > 50 ? note.body.substring(0, 50) + "..." : note.body}
      </p>
      <div className="flex justify-between mt-4">
        <Link to={`/note/${note.id}`} className="text-blue-500">View</Link>
        <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}