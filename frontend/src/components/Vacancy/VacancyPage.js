// VacancyPage.js

import React, { useState } from 'react';
import Vacancy from './Vacancy';
import AddVacancyForm from './AddVacancyForm'; // Import AddVacancyForm component
import './VacancyPage.css'; // Import CSS file

const VacancyPage = () => {
    const [vacancies, setVacancies] = useState([
        {
            title: 'Software Engineer',
            description: 'Both frontend as well as backend knowledge is required',
            requirements: ['Proficiency in JavaScript', 'Experience with React'],
            product: 'NextGen',
            experienceRequired: '2+ years',
        },
        {
            title: 'Data Analyst',
            description: 'Proficient in data analysis tools with some knowledge of development',
            requirements: ['Strong analytical skills', 'Experience with SQL'],
            product: 'Simba',
            experienceRequired: '4+ years',
        },
        {
            title: 'UI/UX Designer',
            description: 'Knowledge of design elements for financial applications.',
            requirements: ['Experience with UI/UX design tools', 'Creative thinking'],
            product: 'Hubble',
            experienceRequired: '3+ years',
        },
        {
            title: 'DevOps Engineer',
            description: 'Can work with both aws and azure',
            requirements: ['Experience with Docker', 'Knowledge of CI/CD pipelines'],
            product: 'Source Connect',
            experienceRequired: '2+ years',
        },
    ]);
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddVacancyClick = () => {
        setShowAddForm(true);
    };

    const handleAddVacancySubmit = (newVacancy) => {
        setVacancies([...vacancies, newVacancy]);
        setShowAddForm(false); // Close the form after submission
    };

    return (
        <div className="vacancy-page">
            <h1>Current Vacancies</h1>
            <button className="add-vacancy-button" onClick={handleAddVacancyClick}>
                Add New Vacancy
            </button>
            {showAddForm ? <AddVacancyForm onSubmit={handleAddVacancySubmit} /> : null}
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

