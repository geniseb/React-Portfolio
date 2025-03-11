import React from "react";
// import Image from "../../Assets/Images/projectbackground.png";
import Image1 from "../../Assets/Images/projectgourmenu.png";
import Image2 from "../../Assets/Images/projectsolemate.png";
import Image3 from "../../Assets/Images/projectrandomquote.png";
import Image4 from "../../Assets/Images/projectdigitalbusinesscard.png";
import Image5 from "../../Assets/Images/projectlogo.png";
import Image6 from "../../Assets/Images/projectmobileadvertisement.png";
import Image7 from "../../Assets/Images/projectcommercial.png";
import Image8 from "../../Assets/Images/projectlabel.png";
import Image9 from "../../Assets/Logos/gplogo.png";
import '../../Styles.css';
import Card from "../Components/Card";

const Projects = () => {
  const projects = [
    {
      image: Image1,
      title: "GourMenu",
    },
    {
      image: Image2,
      title: "Solemate",
    },
    {
      image: Image3,
      title: "Random Quote Machine",
    },
    {
      image: Image4,
      title: "Digital Business Card",
    },
    {
      image: Image5,
      title: "Logo",
    },
    {
      image: Image6,
      title: "Mobile Advertisement",
    },
    {
      image: Image7,
      title: "Commercial",
    },
    {
      image: Image8,
      title: "Bottle Label",
    },
  ];
  return (
    <>
      <div className="background-container">
        {/* <img src={Image} alt="background picture" className="background-image" /> */}
        <div className="header">
          <h1 className="title">Projects</h1>
        </div>

        <div className="logo-container">
          <img src={Image9} alt="logo picture" className="logo-logo" />
        </div>

        <div>
          <div className="project-container">
            {projects.map((project, index) => {
              return <Card key={index} image={project.image} title={project.title} />;
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default Projects;
