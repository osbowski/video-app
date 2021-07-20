import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Nav:React.FC = ()=>{
    const {videos} = useContext(GlobalContext);
    return(
        <Navbar role='navigation' color='dark' fixed='top' className="px-5">
            <NavbarBrand>VideoList APP</NavbarBrand>
            <NavbarText className='text-light'>
                You have 
                <span className="text-primary"> {videos.length} </span>
                {videos.length===1 ? 'video' : 'videos'} on list.
            </NavbarText>
        </Navbar>
    )
}

export default Nav;