import React from 'react';
import './MatchPercentage.css'; // Import CSS file

const MatchPercentage = ({ matchPercentage }) => {
    return (
        <div className="match-percentage">
            <h3>Match Percentage</h3>
            <div className="pie-chart" style={{ backgroundImage: `conic-gradient(#49ab66 ${matchPercentage}%, transparent ${matchPercentage}%)` }}></div>
            <p>{matchPercentage}%</p>
        </div>
    );
};

export default MatchPercentage;