import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile/Profile';
import Landing from './components/landing/Landing';
import Update from './components/updates/Update';
import Twitter from './components/feed/Twitter.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VacancyPage from './components/Vacancy/VacancyPage.js'
import MatchPage from './components/Match/MatchPage.js'
import Feed from "./components/feed/Feed";
import Login from "./components/login/Login";
import Vacancy from "./components/Vacancy/Vacancy";

function App() {
    return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/updates" element={<> <Navbar /><Update /></>} />
                <Route path="/Profile" element={<><Navbar /><Profile /></>} />
                <Route path="/login" element={<Login />} />
                <Route path="/Vacancies" element={<><Navbar /><VacancyPage /></>} />
                <Route path="/Matches" element={<><Navbar /><MatchPage /></>} />
                <Route path="/feed" element={<><Navbar /><Feed /></>} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/twitter" element={<><Navbar /><Twitter /></>} />

            </Routes>

      </BrowserRouter>
    
  );
}

export default App;
