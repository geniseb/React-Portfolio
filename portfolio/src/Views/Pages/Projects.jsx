import React from "react";
import '../../Styles.css';
import Card from "../Components/Card";
import Image1 from "../../Assets/Images/projectgourmenu.png";
import Image2 from "../../Assets/Images/projectmbp.png";
import Image3 from "../../Assets/Images/projectrandomquote.png";
import Image4 from "../../Assets/Images/projectdigitalbusinesscard.png";
import Image5 from "../../Assets/Images/projectlogo.png";
import Image6 from "../../Assets/Images/projectmobileadvertisement.png";
import Image7 from "../../Assets/Images/projectcommercial.png";
import Image8 from "../../Assets/Images/projectlabel.png";
import Image9 from "../../Assets/Images/digitalbusinesscard.pdf";
import Image10 from "../../Assets/Images/companylogo.pdf";
import Image11 from "../../Assets/Images/mobileadvertisement.pdf";
import Image12 from "../../Assets/Videos/commercial.mp4";
import Image13 from "../../Assets/Images/bottlelabel.pdf";

const Projects = () => {
  const projects = [
    {
      image: Image1,
      title: "GourMenu",
      link: "https://github.com/geniseb/Gourmenu.git",
    },
    {
      image: Image2,
      title: "Mindful Breathing",
      link: "https://www.themindfulbreathingprogram.com/",
    },
    {
      image: Image3,
      title: "Quote Generator",
      link: "https://github.com/geniseb/Randomequotegenerator.git",
    },
    {
      image: Image4,
      title: "Digital Business Card",
      link: Image9,
    },
    {
      image: Image5,
      title: "Company Logo",
      link: Image10,
    },
    {
      image: Image6,
      title: "Mobile Advertisement",
      link: Image11,
    },
    {
      image: Image7,
      title: "Commercial",
      link: Image12,
    },
    {
      image: Image8,
      title: "Bottle Label",
      link: Image13,
    },
  ];
  return (
    <>
      <div className="background-container">
        <div className="header">
          <h1 className="title">Projects</h1>
        </div>

        <div>
          <div className="project-container">
            {projects.map((project, index) => {
              return <Card key={index} image={project.image} title={project.title} link={project.link} />
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default Projects;
