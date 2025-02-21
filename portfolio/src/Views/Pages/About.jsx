import React from "react";
import Image from "../../Assets/Images/aboutimage.png"


const About = () => {
    return (
        <>
            
           
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            
            <div className="about-container">
            <div className="about-text">
                <p>Highly skilled and innovative professional, proficient in graphic design, seeking a dynamic career opportunity that leverages my extensive design and computer experience. I am a passionate and adaptable problem-solver, committed to continuous learning, and possess strengths in leadership, teamwork, and creativity.</p>
            </div>

            <img src={Image} alt="picture of graphic technology" className="about-image" />
            </div>

            <div className="about-morebutton">
                <button className="about-morebuttontext-">MORE</button>
            </div>
        </>
    );
}

export default About;