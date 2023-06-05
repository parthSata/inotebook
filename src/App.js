import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <NoteState>
        <Routes>
          <Route path='/' />
          <Route path='/about' element={<About />} />
        </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
