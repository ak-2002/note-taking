import React from 'react'

const Header = ({handleToggleDarkMode}) => {

    const myStyle = {
        color: '#aa2101',
    };

    return (
        <div className="header">
     
            <h1><span style={myStyle}>Note Taking App</span></h1>
     
        
                <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Change Mode</button>

            
        </div>
    )
}

export default Header
