// VacancyPage.js

import React, { useState } from 'react';
import Vacancy from './Vacancy';
import AddVacancyForm from './AddVacancyForm'; // Import AddVacancyForm component
import './VacancyPage.css'; // Import CSS file

const VacancyPage = () => {
    // Sample data for vacancies
    const vacancies = [
        {
            title: 'Software Engineer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            requirements: ['Proficiency in JavaScript', 'Experience with React'],
            product: 'Product A',
            experienceRequired: '2+ years',
        },
        {
            title: 'Data Analyst',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            requirements: ['Strong analytical skills', 'Experience with SQL'],
            product: 'Product B',
            experienceRequired: '3+ years',
        },
        {
            title: 'UI/UX Designer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            requirements: ['Experience with UI/UX design tools', 'Creative thinking'],
            product: 'Product C',
            experienceRequired: '3+ years',
        },
        {
            title: 'DevOps Engineer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            requirements: ['Experience with Docker', 'Knowledge of CI/CD pipelines'],
            product: 'Product D',
            experienceRequired: '2+ years',
        },
    ];

    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddVacancyClick = () => {
        setShowAddForm(true);
    };

    return (
        <div className="vacancy-page">
            <h1>Current Vacancies</h1>
            <button className="add-vacancy-button" onClick={handleAddVacancyClick}>
                Add New Vacancy
            </button>
            {showAddForm ? <AddVacancyForm /> : null}
            {vacancies.map((vacancy, index) => (
                <Vacancy
                    key={index}
                    title={vacancy.title}
                    description={vacancy.description}
                    requirements={vacancy.requirements}
                    product={vacancy.product}
                    experienceRequired={vacancy.experienceRequired}
                />
            ))}
        </div>
    );
};

export default VacancyPage;
