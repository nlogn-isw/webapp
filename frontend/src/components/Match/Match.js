import React, { useState } from 'react';
import MatchPercentage from './MatchPercentage';
import './Match.css'; // Import CSS file

const Match = ({ name, email, currentPosition, matchPercentage }) => {
  const [showMatchPercentage, setShowMatchPercentage] = useState(false);

  const handleShowMatchPercentage = () => {
    setShowMatchPercentage(true);
  };

  return (
    <div className="match">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Current Position:</strong> {currentPosition}</p>
      {showMatchPercentage ? <MatchPercentage matchPercentage={matchPercentage} /> : <button onClick={handleShowMatchPercentage}>Requirements Fulfilled</button>}
    </div>
  );
};

export default Match;