import { useState , useEffect } from "react"
import { NotesContext } from "../Context/NotesContext"
import {useNavigate} from "react-router-dom";
import React, { useContext } from 'react'; 



const CreateNote =() => {
    const {addNote} = useContext(NotesContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) return; 
    
        addNote(title, body);
        setTitle("");
        setBody("");
        navigate("/"); 
      };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-2 p-2 border rounded"
              required
            />
            <textarea
              placeholder="Write your note here..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full mb-2 p-2 border rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    )
}


export default CreateNote; 