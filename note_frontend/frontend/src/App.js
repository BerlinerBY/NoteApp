import './App.css';
import AddNote from './components/AddNote/AddNote';
import NoteList from './components/NotesList/NoteList';

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementNote } from "./features/slices/noteSlicer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/notes")
      .then((response) => {
            dispatch(incrementNote(response.data))
      })
  }, [])

  return (
    <div className="App"> 
      <div className='AppHeader'>
        <h2>My notes</h2>
      </div>
      <div className='AppSides'>
        <AddNote />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
