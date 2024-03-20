import React, { useState } from "react";
import "./Update.css";
import Card from "./Card";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";

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
                className="input-field"
                placeholder="What's on your mind?"
                    style={{ width: "98%", maxWidth: "1160px", minWidth: "1160px", minHeight: "122px", maxHeight: "122px" }}

               
             
 
            />
                <button type="submit" className="button">Post</button>
            </form>
           
          
            <div>
          
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <div className="card">
                        <div className="profile">
                            <img src="https://picsum.photos/200" alt="Profile" className="profile-photo" />
                            <p className="name">Milan MY</p>
                            <p className="username">@milan_my</p>
                            <p className="pipe">|</p>
                            <p className="time">3h</p>
                        </div>

                        <div className="message">We're pleased to announce that our employee engagement survey results are in.
                            Overall satisfaction levels have increased by 10% compared to last year! Reminder: Quarterly performance reviews are scheduled for next week. Please ensure all feedback is submitted by EOD tomorrow. </div>
                        <div className="actions">
                            <button className="like-button"> <img className="like" src={like}></img>   (10)</button>
                            <button className="comment-button">  <img className="comment" src={comment}></img>  (5)</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="profile">
                            <img src="https://picsum.photos/200" alt="Profile" className="profile-photo" />
                            <p className="name">Gyan Ranjan</p>
                            <p className="username">@gyan_00</p>
                            <p className="pipe">|</p>
                            <p className="time">1h</p>
                        </div>

                        <div className="message">Team A successfully completed the project ahead of schedule. Kudos to the team for their hard work and dedication!
                           Team B has finalized their proposal for the upcoming client presentation. Excited to see their hard work pay off! 👍</div>
                        <div className="actions">
                            <button className="like-button"> <img className="like" src={like}></img>   (20)</button>
                            <button className="comment-button">  <img className="comment" src={comment}></img>  (5)</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="profile">
                            <img src="https://picsum.photos/200" alt="Profile" className="profile-photo" />
                            <p className="name">Yash Shah</p>
                            <p className="username">@yash_22</p>
                            <p className="pipe">|</p>
                            <p className="time">30m</p>
                        </div>

                        <div className="message">The finance team has finalized the budget for Q3. Please review and provide any necessary adjustments by the end of the week. 😊
                          We're looking to fill a new position in the marketing department. If you know anyone who might be a good fit, please refer them to HR. </div>
                        <div className="actions">
                            <button className="like-button"> <img className="like" src={like}></img>   (10)</button>
                            <button className="comment-button">  <img className="comment" src={comment}></img>  (3)</button>
                        </div>
                    </div>
                    {updates.map((update) => (


                      

                        <Card profilePhoto="https://picsum.photos/200" author="Apoorv Prakash Gupta" username="apoorv" time="10m" message={update.description} likes="20" comments="10" />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Update;
