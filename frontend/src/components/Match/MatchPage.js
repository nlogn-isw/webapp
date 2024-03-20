import React from 'react';
import Match from './Match';
import './MatchPage.css'; // Import CSS file

const MatchPage = () => {
    const matches = [
        {
            name: 'Milan MY',
            email: 'milanmy@gmail.com',
            currentPosition: 'Software Engineer',
            matchPercentage: 70,
        },
        {
            name: 'Yash Shah',
            email: 'shahyash@gmail.com',
            currentPosition: 'Data Analyst',
            matchPercentage: 90,
        },
        {
            name: 'Gyan Ranjan',
            email: 'gyanranjan2424.com',
            currentPosition: 'Project Manager',
            matchPercentage: 60,
        },
        {
            name: 'Palak Khandelwal',
            email: 'khandelwal2000@gmail.com',
            currentPosition: 'UI/UX Designer',
            matchPercentage: 85,
        },
    ];

    return (
        <div className="match-page">
            <h1>Available Profiles</h1>
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