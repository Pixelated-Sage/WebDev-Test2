import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "../Context/NotesContext";

const NoteDetails = () => {
  const { id } = useParams();
  const { notes } = useContext(NotesContext);
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-red-500">Note not found!</h2>
        <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-3xl font-bold">{note.title}</h2>
        <p className="text-gray-700 mt-4">{note.body}</p>
        <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Back to Notes
        </Link>
      </div>
    </div>
  );
};

export default NoteDetails;
