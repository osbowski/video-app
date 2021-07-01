import './App.css';
import AddVideo from './components/AddVideo';
import Nav from './components/Nav';
import VideoList from './components/VideoList';

const App=()=>{
  return (
    <div className="App">
      <Nav />
      <VideoList />
      <AddVideo />
    </div>
  );
}

export default App;
