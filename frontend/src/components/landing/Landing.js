import React from "react";
import "./Landing.css"; // Import CSS file for styling
import Header from "./Header";
import image from "../../assets/image.png";

const Landing = () => {
    return (
        <div>
            <Header />
            <div className="box">
                <div className="left">
                    <h2 className="head1">Connecting people, Sharing moments</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        commodo, urna sed elementum efficitur, mi tortor aliquet est, nec
                        aliquam justo lacus sit amet neque.
                    </p>
                </div>
                <div className="right">
                    <img src={image} alt="Image" />
                </div>
            </div>
            <h1 style={{ textAlign: 'center' }}>SERVICES</h1>
            <div className="post-cards">
                <a href="#" className="post-card">
                    <img src="https://img.freepik.com/free-photo/happy-diverse-people-using-digital-devices_53876-96225.jpg" alt="Post 1" />
                    <h3><span className="small-text">connect and build together</span></h3>
                    <p className="big-text">come on we are getting close..</p>
                </a>
                <a href="#" className="post-card">
                    <img src="https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 2" />
                    <h3><span className="small-text">we build happy things</span></h3>
                    <p className="big-text">Make you happy in this stress world...</p>
                </a>
                <a href="#" className="post-card">
                    <img src="https://as1.ftcdn.net/v2/jpg/02/71/23/84/1000_F_271238465_EEv1RZJ0x1R2PZ2jHUJnKR0ysvFO4WN8.jpg" alt="Post 3" />
                    <h3><span className="small-text">hello new feed here</span></h3>
                    <p className="big-text">Check it.this is good to watch me..</p>
                </a>
            </div>
        </div>
    );
};

export default Landing;
