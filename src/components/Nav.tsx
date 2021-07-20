import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Nav:React.FC = ()=>{
    const {videos} = useContext(GlobalContext);
    return(
        <nav className="nav">
            <div>VideoList APP</div>
            <div>You have {videos.length} {videos.length===1 ? 'video' : 'videos'} on list.</div>
        </nav>
    )
}

export default Nav;