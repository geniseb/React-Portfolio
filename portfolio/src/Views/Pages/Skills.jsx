import React from "react";
import Image from '../../Assets/Images/skills.png';


const Skills = () => {
    return (
        <div className="skills-bacground">
            <div className="header">
                <h1 className="title">Skills</h1>
            </div>

            <div className="skills-container">
                <img src={Image} alt="skills picture" className="skills-image" />
            </div>

        </div>
    )
}
export default Skills;