import './App.css';
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Video from './Components/Video/Video';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/video/:vidid' element={<Video/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
