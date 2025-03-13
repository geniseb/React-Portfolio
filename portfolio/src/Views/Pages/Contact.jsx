import React, { useState, useRef } from "react";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_c739jx6", "template_j2p4c3u", form.current, "A5q5YqRcsO_1i6M0d")
            .then((result) => { console.log(result.text); },
                (error) => { console.log(error.text); });
        console.log("Form submitted:", formData);
    };

    return (
        <div className="page-container" >
            <div className="contact-container">

                <div className="contact-left">
                    <h1 className="contact-title">Genise <br />Butler</h1>
                    <h5 className="contact-info">(602) 366-5873</h5>
                    <a href="mailto:genise.butler@outlook.com">
                        <h5 className="contact-info">genise.butler@outlook.com</h5>
                    </a>

                </div>

                <div className="contact-right">
                    <h2 className="form-heading">Let's Build Something Great!</h2>

                    <form className="form-background" ref={form} onSubmit={handleSubmit}>

                        <div >
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
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
                                    name="from_email"
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
                            <button type="submit" className="send">Send Message</button>
                        </div>

                    </form>
                </div>

            </div>
            <Footer />
        </div>

    );
};

export default Contact;
