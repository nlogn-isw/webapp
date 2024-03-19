import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import VacancyPage from './components/Vacancy/VacancyPage.js'
import MatchPage from './components/Match/MatchPage.js'

function App() {
     return (
      <div className="App">
          <Navbar />
          <VacancyPage />
          <MatchPage/>
    </div>
  );
}

export default App;
