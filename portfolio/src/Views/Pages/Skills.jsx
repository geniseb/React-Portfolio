import React from "react";
import Image from '../../Assets/Images/skillssoftware.png';


const Skills = () => {
    return (
        <>
        <div className="header">
            <h1 className="skillspage-title">Skills</h1>
            <h3 className="sub-title">SOFTWARE & TECHNOLOGY</h3>
        
        </div>

        <div className="skills-container">
            <img src={Image} alt="skills picture" className="skills-image" />
        </div>



        </>
    )
}
export default Skills;