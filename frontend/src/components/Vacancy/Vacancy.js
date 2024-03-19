import React from 'react';
import './Vacancy.css'; // Import CSS file

const Vacancy = ({ title, description, requirements, product, experienceRequired }) => {
    return (
        <div className="vacancy">
            <h2>{title}</h2>
            <p><strong>Product:</strong> {product}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Experience Required:</strong> {experienceRequired}</p>
            <h3>Requirements:</h3>
            <ul>
                {requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
        </div>
    );
};

export default Vacancy;