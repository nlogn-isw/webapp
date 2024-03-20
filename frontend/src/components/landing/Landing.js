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
                        Welcome to our company's social platform, where employees come together to share their professional achievements, project updates, and personal moments. Stay connected with colleagues, celebrate milestones, and foster a vibrant community where everyone's voice is heard. Join us in building a culture of collaboration and camaraderie, both in and out of the workplace.
                    </p>
                </div>
                <div className="right">
                    <img src={image} alt="Image" />
                </div>
            </div>
            <h1 style={{ textAlign: 'center', color:'#1f2c53' }}>SERVICES</h1>
            <div className="post-cards">
                <div className="post-card">
                    <img src="https://img.freepik.com/free-photo/happy-diverse-people-using-digital-devices_53876-96225.jpg" alt="Post 1" />
                    <h3><span className="small-text">LifeLink: Connect, Share, Thrive</span></h3>
                    <p className="big-text">Your personal space within our company's social platform, where employees can share their achievements, personal moments, and life updates. Stay connected with colleagues, celebrate milestones, and nurture a supportive community.</p>
                </div>
                <div className="post-card">
                    <img src="https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Post 2" />
                    <h3><span className="small-text">Product Pulse: Stay Updated</span></h3>
                    <p className="big-text">From regular progress reports to critical announcements, this platform empowers employees and senior developers to share important updates about our products and ongoing work.</p>
                </div>
                <div className="post-card">
                    <img src="https://as1.ftcdn.net/v2/jpg/02/71/23/84/1000_F_271238465_EEv1RZJ0x1R2PZ2jHUJnKR0ysvFO4WN8.jpg" alt="Post 3" />
                    <h3><span className="small-text">TalentConnect: Find Your Next Star!</span></h3>
                    <p className="big-text">Streamline your recruitment efforts, save time, and find the perfect candidates to fill your team.Post job vacancies and discover the best-matched candidates based on skills, experience, and cultural fit..</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;
