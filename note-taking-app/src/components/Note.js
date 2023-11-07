import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
{/*Note card component using id,text,date,handleDeleteNote as props */}

function Note({id,text,date,handleDelete}) {
    return (
        <div className="note">
 
            <span>{text}</span>

            
            <div className="note-footer">
            {/*it will store date on which the user is going to create the note*/} 
                <small>{date}</small>

                <MdDeleteForever onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" />
            </div>
            
        </div>
    )
}

export default Note
