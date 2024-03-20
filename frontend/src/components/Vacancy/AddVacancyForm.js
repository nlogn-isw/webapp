import React, { useState } from 'react';
import './AddVacancyForm.css'; // Import CSS file

const AddVacancyForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [product, setProduct] = useState('');
    const [experienceRequired, setExperienceRequired] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVacancy = {
            title,
            description,
            requirements: requirements.split(',').map(req => req.trim()),
            product,
            experienceRequired
        };
        onSubmit(newVacancy);
        // Clear form fields after submission
        setTitle('');
        setDescription('');
        setRequirements('');
        setProduct('');
        setExperienceRequired('');
    };

    return (
        <div className="add-vacancy-form">
            <h2>Add New Vacancy</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <label>
                    Requirements (comma-separated):
                    <input type="text" value={requirements} onChange={(e) => setRequirements(e.target.value)} required />
                </label>
                <label>
                    Product:
                    <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} required />
                </label>
                <label>
                    Experience Required:
                    <input type="text" value={experienceRequired} onChange={(e) => setExperienceRequired(e.target.value)} required />
                </label>
                <button type="submit">Add Vacancy</button>
            </form>
        </div>
    );
};

export default AddVacancyForm;
