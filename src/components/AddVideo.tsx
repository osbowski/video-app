import { useState } from "react";

const AddVideo:React.FC = ()=>{
    const [link,setLink] = useState('');


    return(


        <div>
            <h3>Dodaj nowy film do listy</h3>
        <form>
            <input type="text" onChange={(e)=>setLink(e.target.value)} />
            <button>Dodaj</button>
        </form>
        </div>
    )
}

export default AddVideo;