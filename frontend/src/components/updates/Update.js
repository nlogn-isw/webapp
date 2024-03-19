import React, { useState } from "react";

import "./Update.css";
import Card from "./Card";

const Update = () => {
    // State for storing input values
  
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState("");
   

    // State for storing updates made by other members
    const [updates, setUpdates] = useState([]);

    // Function to handle input changes
   
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value); // Limit description to 100 characters
    };

   

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new update object
        const newUpdate = {
          
            description,
            product,
           
        };
        // Add the new update to the updates array
        setUpdates([newUpdate, ...updates]);
        // Clear the input fields after submission
       
        setDescription("");
        setProduct("");
       
        // Close the modal after submission
       
    };

    return (
        <div className="container">
          
            <form onSubmit={handleSubmit} className="form">
                <textarea 
                    rows="8" 
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                style={{ width: "98%", maxWidth: "1160px", minWidth: "1160px", minHeight: "122px", maxHeight: "122px" }}
                className="input-field"
                placeholder="What's on your mind?"


               
             
 
            />
                <button type="submit" className="button">Post</button>
            </form>
           
          
            <div>
          
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {updates.map((update) => (


                      

                        <Card profilePhoto="https://picsum.photos/200" author="Manager 1" username="palak25" time="2h" message={update.description} likes="20" comments="10" />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Update;
