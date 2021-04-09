import React from "react";

function Bio() {
    return(
        <>
        <main id="about">
            <h1>Ky Taylor</h1>
            <div class="square"></div>

            <div>
                <h2 class="text">Hello!</h2>
                <p class="text">
                    My name is <span class="bold">Ky Taylor</span>. I am a full-stack web developer with experience in <span class="bold">HTML</span>, <span class="bold">CSS</span>, <span class="bold">JavaScript</span>, <span class="bold">node.js</span>, <span class="bold">MySQL</span>, <span class="bold">Sequelize</span>, <span class="bold">MongoDB</span>, <span class="bold">Mongoose</span>, and <span class="bold">React</span>.
                </p>

                <p class="text">
                    I have always had an interest in technology, spending my time in high school participating in a robotics team, and have found a passion in web development. In addition, I also have experince with art and desgin, and love creating beautiful interfaces for an enhanced user experience.
                </p>

                <h2 class="text">Find me on:</h2>
                <a class="external-button margin" href="https://github.com/kytaylor">GitHub</a>
                <a class="external-button button" href="https://www.linkedin.com/in/ky-taylor-/">LinkedIn</a>
            </div>
        </main>
        </>
    )
}

export default Bio;