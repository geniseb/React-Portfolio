import React, { useState } from "react";
import Footer from "./Footer";
// import Image from "../../Assets/Images/contactbackground.png";

const Contact = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., sending the data to a server or API)
        console.log("Form submitted:", formData);
    };

    return (
        <div className="page-container" >
        <div className="contact-container">
            {/* <div className="contact-background">
                <img src={Image} alt="background picture" className="contact-image" />
            </div> */}

            <div className="contact-left">
                {/* <div className="header-container"> */}
                <h1 className="contact-title">Genise <br />Butler</h1>
                {/* </div> */}

                {/* <div className="contact-section"> */}
                <h5 className="contact-info">(602) 366-5873</h5>
                <a href="mailto:genise.butler@outlook.com">
                    <h5 className="contact-info">genise.butler@outlook.com</h5>
                </a>
                <h5 className="contact-info">4032 E. Shangri-La Road</h5>
                <h5 className="contact-info">Phoenix, AZ 85028</h5>
                {/* </div> */}
            </div>

            <div className="contact-right">
                <h2 className="form-heading">Let's Build Something Great!</h2>

                <form className="form-background" onSubmit={handleSubmit}>

                    <div >
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message"></label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Message"
                            />
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </div>

                </form>
            </div>

        </div>
  <Footer />
  </div>

    );
};

export default Contact;
