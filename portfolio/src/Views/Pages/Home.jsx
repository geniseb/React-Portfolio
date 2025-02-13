import React from "react";
import '../../Styles.css';
import Video from '../../Assets/Videos/videobackground.mp4';

const Home = () => {
    return (
        <>
            <div className="video-container">
                <video autoPlay muted loop className="background-video">
                    <source src={Video} type="video/mp4" />

                </video>
            </div>
        </>
    )
}
export default Home;