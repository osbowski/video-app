
import { GlobalProvider } from './context/GlobalState'
import './App.css';
import AddVideo from './components/AddVideo';
import Nav from './components/Nav';
import VideoList from './components/VideoList';
import YTApiTest from './yt-api-logic';

const App=()=>{
  return (
    <GlobalProvider>
    <div className="App">
      <Nav />
      <VideoList />
      <AddVideo />
      <YTApiTest />
    </div>
    </GlobalProvider>
  );
}

export default App;
