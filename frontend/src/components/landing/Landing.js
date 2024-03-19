import React from "react";
import "./Landing.css"; // Import CSS file for styling
import Header from "./Header";
import image from "../../assets/image.png"

const Landing = () => {
    return (
        <div>
            <Header />
            <div className="box">
                <div className="left">
                    <h2 className="head1">Connecting people,   <nbsp></nbsp>
                        <nbsp></nbsp>  <nbsp></nbsp>   Sharing moments</h2>

                    
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
        </div>
    );
};

export default Landing;
