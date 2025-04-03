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
    className={`min-h-screen mt-6 ${
      theme === "dark" ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
      : "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
  } p-8 transition-all duration-500`}
  >
    {/* <div className="flex justify-between items-center mb-12 backdrop-blur-sm bg-white/10 p-6 rounded-2xl">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">📒 Notes App</h1>
      
      <button
        onClick={toggleTheme}
        className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 
                   hover:bg-white/30 transition-all duration-300 transform hover:scale-105
                   text-white shadow-lg hover:shadow-xl"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
      </button>
    </div> */}

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease:"easeOut" }}
      className="text-center mb-12 p-8 backdrop-blur-md bg-white/5 rounded-3xl border border-white/10"
    >
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Welcome to Notes App</h1>
      <p className="mt-2 text-lg text-white/80">Save and manage your notes easily.</p>
      <Link to="/create">
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                     text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl 
                     transition-all duration-300 transform hover:-translate-y-1">
          Create a Note
        </button>
      </Link>
    </motion.div>
    {loading ? (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
          <p className="text-white/80 mt-4 text-lg">Loading your notes...</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {notes.map((note) => (
            <motion.div
              key={note.id}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-2xl backdrop-blur-md border border-white/20 
                       transform transition-all duration-300 hover:shadow-2xl ${
                theme === "dark" 
                  ? "bg-gray-800/50 text-white" 
                  : "bg-white/10 text-white"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-3">{note.title}</h2>
              <p className="mt-2 text-base opacity-80">{note.body}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => deleteNote(note.id)}
                className="mt-6 px-5 py-2 bg-red-500/80 backdrop-blur-sm text-white rounded-lg
                         hover:bg-red-600 transition duration-300 transform hover:-translate-y-1
                         shadow-lg hover:shadow-xl"
              >
                Delete Note
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Home;