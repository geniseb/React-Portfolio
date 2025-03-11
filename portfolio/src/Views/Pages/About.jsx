import React from "react";
import Image from "../../Assets/Images/aboutimage.png"


const About = () => {
    return (
        <>
            <div className="header">
                <h1 className="title">About Me</h1>
            </div>

            <div className="about-container">
                <div className="about-text">
                    <p className="text-description">Highly skilled and innovative professional, proficient in graphic design, seeking a dynamic career opportunity that leverages my extensive design and computer experience. I am a passionate and adaptable problem-solver, committed to continuous learning, and possess strengths in leadership, teamwork, and creativity.</p>
                    <button className="about-morebuttontext-" onClick={() => window.location.href='/skills'}>More</button>
                </div>

                <img src={Image} alt="picture of graphic technology" className="about-image" />
            </div>
            

                           
            </>
        
    );
}

export default About;