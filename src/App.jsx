import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { NotesProvider } from "./Context/NotesContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import Home from "./Pages/Home.jsx"
import CreateNote from "./Pages/CreateNote.jsx"
import NoteDetails from './Pages/NotesDetails.jsx';
import Navbar from "./Components/NavBar/NavBar.jsx"

function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/note/:id" element={<NoteDetails />} />
          </Routes>
        </Router>
      </NotesProvider>
    </ThemeProvider>
  )
}

export default App