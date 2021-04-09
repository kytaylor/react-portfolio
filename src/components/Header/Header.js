import React from "react";

function Header() {
    return(
        <>
        <header>
            <nav>
                <a class="about-link link-button" href="#about">About</a>
                <a class="portfolio-link link-button" href="#portfolio">Portfolio</a>
                <a class="resume-link link-button" href="#resume">Resume</a>
                <a class="contact-link link-button" href="#contact">Contact</a>
            </nav>
        </header>
        </>
    )
}

export default Header;