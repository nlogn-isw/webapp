// Profile.js

import React from 'react';
import './Profile.css'; // Import CSS file for styling
import profilepic from "../../assets/profilepic.jpg"

const Profile = () => {
  // Sample user data
  const user = {
    name: 'Apoorv Prakash Gupta',
    email: 'Apoorv.PrakashGupta@insightsoftware.com',
    number: '+91 9369xxxxxx',
    skills: ['Teach me some'],
    designation: 'Intern',
   
  };

  return (
    <div className="profile-container">
          <div className="profile-image">
              <img src={profilepic} alt="Profile" />
      </div>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Number:</strong> {user.number}</p>
        <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
        <p><strong>Designation:</strong> {user.designation}</p>
      </div>
    </div>
  );
}

export default Profile; 
