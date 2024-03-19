import React from 'react';
import Match from './Match';
import './MatchPage.css'; // Import CSS file

const MatchPage = () => {
    const matches = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            currentPosition: 'Software Engineer',
            matchPercentage: 80,
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            currentPosition: 'Data Analyst',
            matchPercentage: 90,
        },
        {
            name: 'Michael Johnson',
            email: 'michael@example.com',
            currentPosition: 'Project Manager',
            matchPercentage: 75,
        },
        {
            name: 'Emily Brown',
            email: 'emily@example.com',
            currentPosition: 'UI/UX Designer',
            matchPercentage: 85,
        },
    ];

    return (
        <div className="match-page">
            <h1>Matched Profiles</h1>
            {matches.map((match, index) => (
                <Match
                    key={index}
                    name={match.name}
                    email={match.email}
                    currentPosition={match.currentPosition}
                    matchPercentage={match.matchPercentage}
                />
            ))}
        </div>
    );
};

export default MatchPage;