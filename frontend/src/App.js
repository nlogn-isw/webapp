
import './App.css';
import Navbar from './components/Navbar.js';
import Update from './components/updates/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/updates" element={<Update />} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
