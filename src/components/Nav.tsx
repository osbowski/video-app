import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const Nav:React.FC = ()=>{

    const videos = useContext(GlobalContext);
    
    const syntax = ()=>{
        let word:string;

        if(videos.length===1){
            word='film'
        }else if(videos.length>1 && videos.length<5){
            word='filmy'
        }else{
            word='filmów'
        }
        return word
    }

    return(
        <nav className="nav">
            <div>VideoList APP</div>
            <div>Masz {videos.length} {syntax()} na swojej liście</div>
        </nav>
    )
}

export default Nav;