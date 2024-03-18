import React from "react";
import "./Card.css";
import  like from "../../assets/like.png";
import comment from "../../assets/comment.png";

const Card = ({ profilePhoto, author,username, time, message, likes, comments }) => {
    return (
        <div className="card">
            <div className="profile">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
                <p className="name">{author}</p>
                <p className="username">@{username}</p>
                <p className="pipe">|</p>
                <p className="time">{time}</p>
            </div>
           
            <div className="message">{message}</div>
            <div className="actions">
                <button className="like-button"> <img className="like" src={like}></img>   ({likes})</button>
                <button className="comment-button">  <img className="comment" src={comment}></img>  ({comments})</button>
            </div>
        </div>
    );
};

export default Card;
