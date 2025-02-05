import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  let [notes,setNotes] = useState([])


  function onAdd(note){
    console.log(note)
    setNotes(prevNotes =>{
      return [...prevNotes,
        note
      ]
    })
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd}/>
      {notes.map((note,index) => {
         return <Note id={index} key={index} title={note.title} content={note.content} onDelete={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
  