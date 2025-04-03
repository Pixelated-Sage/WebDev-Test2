import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts?_limit=8")
          .then((response) => {
            setNotes(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching notes:", error);
            setLoading(false);
          });
      }, []);



    const addNote = (title, body) => {
      const newNote = {
        id: Date.now(),
        title,
        body,
      };
      setNotes((prevNotes) => [newNote, ...prevNotes]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !==id));
    } 

    return (
      <NotesContext.Provider value={{ notes, loading, addNote, deleteNote }}>
        {children}
      </NotesContext.Provider>
    );
    
}