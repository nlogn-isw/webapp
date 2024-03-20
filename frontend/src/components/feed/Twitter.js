import React, { useState, useEffect } from 'react';
import './Twitter.css'; // Import CSS for styling
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const Twitter = () => {
    const [tweets, setTweets] = useState([
        {
            username: 'gyan_ranjan',
            content: 'Just finished an amazing project at #InsightSoftware! #TeamWork #Success',
            timestamp: '3h ago',
            comments: [],
            liked: false,
            commentText: ''
        },
        {
            username: 'palak_khandelwal',
            content: 'Huge thanks to my team at #InsightSoftware for their support! #Grateful #2024',
            timestamp: '4h ago',
            comments: [{ username: 'apoorv_gupta', comment: 'You guys rock!' }],
            liked: false,
            commentText: ''
        },
        // Additional tweets with congratulatory messages
        {
            username: 'apoorv_gupta',
            content: 'Congratulations CDM team for being the team of the quarter! #TeamOfTheQuarter',
            timestamp: '5h ago',
            comments: [{ username: 'gyan_ranjan', comment: 'Well deserved!' }],
            liked: false,
            commentText: ''
        },
        {
            username: 'milan_my',
            content: 'Congratulations @apoorv_gupta for being the intern of the quarter! #InternOfTheQuarter',
            timestamp: '6h ago',
            comments: [{ username: '_yash2880', comment: 'Great job!' }],
            liked: false,
            commentText: ''
        },
        {
            username: '_yash2880',
            content: 'Excited to join #InsightSoftware! #NewBeginnings #2024',
            timestamp: '2h ago',
            comments: [{ username: 'gyan_ranjan', comment: 'Welcome aboard!' }],
            liked: false,
            commentText: ''
        }
    ]);

    useEffect(() => {
        // Generate random likes initially for each tweet
        const initialLikes = tweets.map(() => Math.floor(Math.random() * 100));
        setLikes(initialLikes);
    }, [tweets]);

    const [likes, setLikes] = useState([]);

    const handleLike = (index) => {
        setTweets((prevTweets) => {
            const newTweets = [...prevTweets];
            if (newTweets[index].liked) {
                newTweets[index].liked = false;
                setLikes((prevLikes) => {
                    const newLikes = [...prevLikes];
                    newLikes[index]--;
                    return newLikes;
                });
            } else {
                newTweets[index].liked = true;
                setLikes((prevLikes) => {
                    const newLikes = [...prevLikes];
                    newLikes[index]++;
                    return newLikes;
                });
            }
            return newTweets;
        });
    };

    const handleCommentChange = (index, e) => {
        const { value } = e.target;
        setTweets((prevTweets) => {
            const newTweets = [...prevTweets];
            newTweets[index].commentText = value;
            return newTweets;
        });
    };

    const handleCommentSubmit = (index) => {
        setTweets((prevTweets) => {
            const newTweets = [...prevTweets];
            newTweets[index].comments.push({ username: '_yash2880', comment: newTweets[index].commentText });
            newTweets[index].commentText = '';
            return newTweets;
        });
    };

    const handleTweetSubmit = (content) => {
        const newTweet = {
            username: '_yash2880',
            content: content,
            timestamp: 'just now',
            comments: [],
            liked: false,
            commentText: ''
        };
        setTweets((prevTweets) => [...prevTweets, newTweet]);
        // Randomly generate initial likes for the new tweet
        setLikes((prevLikes) => [...prevLikes, Math.floor(Math.random() * 100)]);
    };

    const [content, setContent] = useState('');

    return (
        <div className="twitter-container">
            <div className="tweet-form">
                <textarea
                    rows="3"
                    placeholder="What's happening?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button  onClick={() => handleTweetSubmit(content)}>Tweet</button>
            </div>
            <div className="tweets">
                {tweets.map((tweet, index) => (
                    <div key={index} className="tweet">
                        <div className="tweet-content">
                            <span className="username">{tweet.username}</span>: {tweet.content.split(' ').map((word, i) => {
                                if (word.startsWith('#')) {
                                    return <span key={i} className="hashtag">{word} </span>;
                                } else if (word.startsWith('@')) {
                                    return <span key={i} className="mention">{word} </span>;
                                } else {
                                    return word + ' ';
                                }
                            })}
                        </div>
                        <div className="timestamp">{tweet.timestamp}</div>
                        <div className="tweet-actions">
                            <div className="like-action" onClick={() => handleLike(index)}>
                                {tweet.liked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                                <span className="like-count">{likes[index]}</span>
                            </div>
                            <div className="comment-action" onClick={() => handleCommentSubmit(index)}>
                                <CommentIcon />
                            </div>
                        </div>
                        <div className="comment-section">
                            {tweet.comments.map((comment, i) => (
                                <div key={i} className="comment">
                                    <span className="username">{comment.username}</span>: {comment.comment}
                                </div>
                            ))}
                            <input
                                type="text"
                                className="comment-input"
                                placeholder="Add a comment..."
                                value={tweet.commentText}
                                onChange={(e) => handleCommentChange(index, e)}
                            />
                            <button className="comment-submit" onClick={() => handleCommentSubmit(index)}>
                                Submit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Twitter;
