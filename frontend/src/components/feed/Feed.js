import React, { useState } from 'react';
import './Feed.css'; // Import CSS for styling
import CommentPopup from './CommentPopup'; // Import CommentPopup component
import img1 from '../../assets/img1.jpg'; // Import images with relative paths
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {Link} from "react-router-dom";

const Feed = () => {
    const [likes, setLikes] = useState([0, 0, 0, 0, 0]); // State for keeping track of likes for each post
    const [showCommentPopup, setShowCommentPopup] = useState(false); // State to control the display of comment popup
    const [comments, setComments] = useState([
        [{ username: 'gyan_ranjan', comment: 'Great post!' }],
        [],
        [],
        [{ username: 'apoorv_gupta', comment: 'Nice picture!' }],
        []
    ]); // State to store comments for each post
    const [liked, setLiked] = useState([false, false, false, false, false]); // State to track if post is liked or not

    const handleLike = (index) => { // Function to handle like button click
        setLiked(prevLiked => {
            const newLiked = [...prevLiked];
            newLiked[index] = !newLiked[index]; // Toggle liked state
            return newLiked;
        });

        setLikes(prevLikes => {
            const newLikes = [...prevLikes];
            if (liked[index]) {
                newLikes[index]--;
            } else {
                newLikes[index]++;
            }
            return newLikes;
        });
    };

    const handleComment = () => { // Function to handle comment button click
        setShowCommentPopup(true); // Show the comment popup
    };

    const handleCloseCommentPopup = () => { // Function to handle closing the comment popup
        setShowCommentPopup(false); // Close the comment popup
    };

    const handleCommentSubmit = (index, comment) => { // Function to handle comment submission
        setComments(prevComments => {
            const newComments = [...prevComments];
            newComments[index] = [...newComments[index], comment];
            return newComments;
        });
        setShowCommentPopup(false); // Close the comment popup after submitting the comment
    };
    const toggleVideoPlay = (index) => {
        const video = document.getElementById(`video-${index}`);
        if (video.paused) {
            video.play().catch(error => {
                console.error('Error playing video:', error);
            });
        } else {
            video.pause();
        }
    };
    
    const userData = [ // Data for usernames, captions, and images
        { username: '_yash2880', caption: 'Feeling good to join Insight Software, very excited to work with all!', image: img1, location: 'Insight Software, Hyderabad, India' },
        { username: 'apoorv_gupta', caption: 'Likethis! Happy to be here.', image: img2, location: 'Insight Software, Bangalore, India' },
        { username: 'gyan_ranjan', caption: 'Excited for the journey ahead.', image: img3, location: 'Insight Software, Bangalore, India' },
        { username: 'milan_my', caption: 'Welcome to my world!', image: img4, location: 'Insight Software, Hyderabad, India' },
        { username: 'palak_khandelwal', caption: 'Ready to explore new opportunities.', image: img5, location: 'Insight Software, Bangalore, India' }
    ];

    return (
        <>
        <div className="feed-container">
            {userData.map((user, index) => ( // Iterate over userData array to generate posts
                <div key={index} className="post">
                    <div className="post-header">
                        <img className="user-avatar" src={`https://via.placeholder.com/150?text=${index + 1}`} alt="User Avatar" />
                        <div className="user-info">
                            <div className="username" ><Link to="/profile">{user.username}</Link></div>
                            <div className="location">{user.location}</div>
                        </div>
                    </div>
                    {user.video ? (
                        <video className="post-video" id={`video-${index}`} src={user.video} onClick={() => toggleVideoPlay(index)} controls />
                    ) : (
                        <img className="post-img" src={user.image} alt="Post Image" />
                    )}
                    <div className="post-actions">
                        <div className="like-action" onClick={() => handleLike(index)}>
                            {liked[index] ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />} {/* Material Icon for like */}
                            <span className="like-count">{likes[index]}</span> {/* Display number of likes */}
                        </div>
                        <div className="comment-action" onClick={handleComment}>
                            <CommentIcon /> {/* Material Icon for comment */}
                        </div>
                    </div>
                    
                    <div className="caption">{user.caption}</div>
                    <div className="comments">
                        {comments[index].map((comment, i) => (
                            <div key={i} className="comment">
                                <span className="username">{comment.username}</span>: {comment.comment}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {showCommentPopup && <CommentPopup onClose={handleCloseCommentPopup} onSubmit={handleCommentSubmit} />} {/* Render the comment popup if showCommentPopup is true */}
        </div>
        <div className="new-post">
        <h1>ADD NEW POST</h1>
                <input type="text" placeholder="Caption" />
                <input type="text" placeholder="Location" />
                <input type="file" accept="image/*"  />
                <button>Add New Post</button>
            </div>
        </>
    );
};

export default Feed;
