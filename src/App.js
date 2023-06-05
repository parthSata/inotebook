import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <div className='container'>
        <Routes>
          <Route path='/' />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
