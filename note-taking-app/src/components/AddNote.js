import React,{useState} from 'react'

function AddNote({handleAddNote}) {

    const [noteText,setNoteText] = useState('');

    const charLimit = 1000;

    const handleChange =(event)=>{

    if(charLimit - event.target.value.length>=0){
        setNoteText(event.target.value)
    }
   
    }

    
    const handleSaveClick =() =>{

        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
       
    }


    return (
        <div className="note new">

            <textarea cols="10" rows="8" placeholder="Text goes here..."
            onChange={handleChange} value={noteText} 
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save Note</button>
            </div>
        </div>
    )
}

export default AddNote
