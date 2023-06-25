import './App.css';
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Video from './Components/Video/Video';
import Search from './Components/Search/Search';
import Channel from './Components/Channel/Channel';
import Playlist from './Components/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/video/:vidid' element={<Video/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/channel/:chid' element={<Channel/>}></Route>
        {/* <Route path='/channel/playlist' element={<Playlist/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
