import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NotesContext } from "../Context/NotesContext.jsx";
import { ThemeContext } from "../Context/ThemeContext.jsx"; 


const Home = () => {
  const { notes, loading, deleteNote } = useContext(NotesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return(
    <div
    className={`min-h-screen ${
      theme === "dark" ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
      : "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
  } p-8 transition-all duration-500`}
  >
    <div className="flex justify-between items-center mb-12 backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">📒 Notes App</h1>
      
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 
                   hover:bg-white/30 transition-all duration-300 transform hover:scale-105
                   text-white shadow-lg hover:shadow-xl"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
      </button>
    </div>

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h1 className="text-4xl font-bold">Welcome to Notes App</h1>
      <p className="mt-2 text-lg">Save and manage your notes easily.</p>
      <Link to="/create">
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
          Create a Note
        </button>
      </Link>
    </motion.div>

    {loading ? (
      <div className="text-center text-lg mt-10">Loading notes...</div>
    ) : (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {notes.map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-lg shadow-lg ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="mt-2 text-sm">{note.body}</p>
            <button
              onClick={() => deleteNote(note.id)}
              className="mt-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </motion.div>
    )}
  </div>
  )
}

export default Home;