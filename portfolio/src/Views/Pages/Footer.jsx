import React from "react";
import Image1 from "../../Assets/Logos/github.png";
import Image2 from "../../Assets/Logos/linkedin.png";
import Image3 from "../../Assets/Logos/gplogo.png";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer>
                       <div className="footer-container">
                <div className="footer-icons">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img className="footer-git" src={Image1} alt="GitHub - Link to GitHub profile" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img className="footer-linkedin" src={Image2} alt="LinkedIn - Link to LinkedIn profile" />
                    </a>

                </div>

                <div className="footer-back-to-top">
                    <button
                        onClick={scrollToTop}
                        style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", font: "inherit" }}
                    >
                        Back To Top
                    </button>
                </div>
                <img className="footer-logo" src={Image3} alt="GP logo" />

            </div>
        </footer>
    );
};

export default Footer;
