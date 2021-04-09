import React from "react";
import entertainmentGuideImage from "../../images/Screenshot 2021-01-08 235410.png";
import weatherImage from "../../images/Screenshot 2020-12-24 182932.png";
import dndHelperImage from "../../images/char-sheet.png";
import charGenImage from "../../images/Screenshot 2021-01-09 000744.png";

function Projects() {
    return(
        <>
        <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Take a look at some of my work.</p>

            <article>
                <h2>Entertainment Guide</h2>

                <img src={entertainmentGuideImage} alt=""/>

                <p>
                    An application to help you find when a show or movie is playing on TV.
                </p>

                <a class="external-button" href="https://github.com/kytaylor/entertainment-guide">GitHub</a>
                <a class="external-button" href="https://kytaylor.github.io/entertainment-guide/">Deployed Application</a>
            </article>

            <article>
                <h2>Weather Dashboard</h2>

                <img src={weatherImage} alt="" />

                <p>
                    A dashboard that allows you to search up a city and see its current weather conditions and the 5-day forecast.
                </p>

                <a class="external-button" href="https://github.com/kytaylor/weather-dashboard">GitHub</a>
                <a class="external-button" href="https://kytaylor.github.io/weather-dashboard/">Deployed Application</a>
            </article>

            <article>
                <h2>Dungeons & Dragons Helper</h2>

                <img src={dndHelperImage} alt="" />

                <p>
                    An application to help quickly build an easy-to-read character sheet for Dungeons & Dragons 5th edition.
                </p>

                <a class="external-button" href="https://github.com/Tapwater808/DungeonsAndDragonsHelper">GitHub</a>
                <a class="external-button" href="https://aqueous-fortress-78837.herokuapp.com/">Deployed Application</a>
            </article>

            <article>
                <h2>Character Generator</h2>

                <img src={charGenImage} alt="" />

                <p>
                    A character stat generator for Dungeons & Dragons 5th edition.
                </p>

                <a class="external-button" href="https://github.com/kytaylor/character-generator">GitHub</a>
                <a class="external-button" href="https://kytaylor.github.io/character-generator/">Deployed Application</a>
            </article>
        </section>
        </>
    )
}

export default Projects;