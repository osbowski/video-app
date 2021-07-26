import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import AddNewVideo from "./components/AddNewVideo";
import Nav from "./components/Nav";
import VideoList from "./components/VideoList";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <Nav />
        <VideoList />
        <AddNewVideo />
      </div>
    </GlobalProvider>
  );
};

export default App;
