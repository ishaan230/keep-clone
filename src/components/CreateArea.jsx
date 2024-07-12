import React,{useState} from "react";



function CreateArea(prop) {

  let [notes,setNotes] = useState({
    id:0,
    title:"",
    content:""
  })



  function handleSubmit(event){
    prop.onAdd(notes)
    event.preventDefault()
  }
  
  function inputChange(event){
    let {name,value} = event.target

    setNotes(prevNotes =>{
      return {...prevNotes,
        [name] : value
      }
    })


  }
  

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={notes.title} onChange={inputChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={inputChange} value={notes.content} />
        <button onClick={handleSubmit} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
