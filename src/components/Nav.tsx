import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import AddNewVideo from "./AddNewVideo";

const Nav: React.FC = () => {
  const { videos } = useContext(GlobalContext);
  return (
    <Navbar role="navigation" color="dark" fixed="top" className="px-5">
      <NavbarBrand>VideoList APP</NavbarBrand>
          <AddNewVideo />
      <NavbarText className="text-light">
        You have
        <span className="text-primary"> {videos.normalVideos.length} </span>
        {videos.normalVideos.length === 1 ? "video" : "videos"} on list.
      </NavbarText>
    </Navbar>
  );
};

export default Nav;
