import React, { useState } from "react";

const AddVideo:React.FC = ()=>{
    const [link,setLink] = useState('');

    const onSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        console.log(link);
    }

    return(
        <div>
            <h3>Dodaj nowy film do listy</h3>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={(e)=>setLink(e.target.value)} />
            <button type='submit'>Dodaj</button>
        </form>
        </div>
    )
}

export default AddVideo;