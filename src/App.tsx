
import { GlobalProvider } from './context/GlobalState'
import './App.css';
import AddVideo from './components/AddVideo';
import Nav from './components/Nav';
import VideoList from './components/VideoList';

const App=()=>{
  return (
    <GlobalProvider>
    <div className="App">
      <Nav />
      <VideoList />
      <AddVideo />
    </div>
    </GlobalProvider>
  );
}

export default App;
