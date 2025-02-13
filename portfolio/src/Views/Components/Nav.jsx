import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {

    return (
        <div className="navbar">
            <ul>
                <li><NavLink className="underline-text" to="/">Home</NavLink></li>
                <li><NavLink className="underline-text" to="/about">About</NavLink></li>
                <li><NavLink className="underline-text" to="/projects">Projects</NavLink></li>
                <li><NavLink className="underline-text" to="/skills">Skills</NavLink></li>
                <li><NavLink className="underline-text" to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Nav;