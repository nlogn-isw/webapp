import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile/Profile';
import Update from './components/updates/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VacancyPage from './components/Vacancy/VacancyPage.js'
import MatchPage from './components/Match/MatchPage.js'

function App() {
    return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/updates" element={<Update />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>

      </BrowserRouter>
    
  );
}

export default App;
