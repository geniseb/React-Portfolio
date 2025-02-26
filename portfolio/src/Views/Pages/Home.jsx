import React from "react";
import '../../Styles.css';
import Video from "../../Assets/Videos/videobackground.mp4";
import Logo from "../../Assets/Logos/gplogo.png";
import Image from "../../Assets/Images/greenperiod.png";

const Home = () => {
    return (
        <div className="top">
            <div className="video-container">
                <video autoPlay muted loop className="background-video">
                    <source src={Video} type="video/mp4" />
                </video>

                <div className="home-title">
                    <h1>Genise Butler</h1>
                </div>
            </div>

            <div className="bottom">
                <div className="subtitle-container">
                    <div className="subtitle-description">
                        <h3> GRAPHIC DESIGNER </h3>
                        <img className="green-stop" src={Image} alt="period" style={{ width: "5px", height: "auto" }} />
                        <h3> UX/UI DESIGNER </h3>
                        <img className="green-stop" src={Image} alt="period" style={{ width: "5px", height: "auto" }} />
                        <h3> FRONT-END DEVELOPER </h3>
                        <img className="green-stop" src={Image} alt="period" style={{ width: "5px", height: "auto" }} />
                    </div>
                </div>

                <div className="logo-container">
                    <img className="home-logo" src={Logo} alt="GP logo" />
                </div>
            </div>
        </div>
    )
}
export default Home;
