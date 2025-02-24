import React from "react";
import Image from "../../Assets/Images/contactbackground.png";



const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-background">
                <img src={Image} alt="background picture" className="contact-image" />
            </div>

            <div className="header-container">
                <h1 className="contact-title">Genise <br />Butler</h1>

            </div>

            <div className="contact-section">
                <h5 className="contact-info">(602) 366-5873</h5>
                <a href="mailto:genise.butler@outlook.com"><h5 className="contact-info">genise.butler@outlook.com</h5></a>
                <h5 className="contact-info">4032 E. Shangri-La Road</h5>
                <h5 className="contact-info">Phoenix, AZ 85028</h5>

            </div >

            {/* <form className="form-Title">Let's Build Something Great!</form> */}


        </div>

    )
}
export default Contact;