import React from 'react';
import './CommentPopup.css';

const CommentPopup = ({ onClose }) => {
    const handleSubmit = (e) => {
        // Handle comment submission here
        e.preventDefault();
        // Close the popup after submitting the comment
        onClose();
    };

    return (
        <div className="comment-popup-overlay">
            <div className="comment-popup">
                <h2>Add Comment</h2>
                <form onSubmit={handleSubmit}>
                    <textarea placeholder="Write your comment here..." rows="4" />
                    <button type="submit">Submit</button>
                </form>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CommentPopup;
