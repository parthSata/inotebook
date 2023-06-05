import React, { useState} from 'react'
import Notecontext from './Notecontext'

const NoteState = (props) => {
        const state ={
            "name": "Parth",  
            "Stream" : "BCA"
    }
    const [State, setstate] = useState(state)
    const update= () => {
        setTimeout(() => {
            setstate({
              name: 'Brijesh',
              Stream: 'MCA',
            });
        },2000);
    }
    return <Notecontext.Provider value={{State,update}}>
        {props.children}
    </Notecontext.Provider>
}

export default NoteState;