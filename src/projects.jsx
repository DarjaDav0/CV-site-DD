import React from "react";
import "./projects.css";

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="project-item">
                <img src="Easy-Energy.jpg" alt="Easy Energy" className="project-image" />
                <div className="project-details">
                    <h2>Easy Energy</h2>
                    <p>This was a large team project. The team consisted of <br/>
                        three people in addition to myself. The application <br/>
                        was developed Kotlin. The goal was to retrieve hourly <br/> 
                        electricity prices through an API from a web address, <br/>
                        store them in our own database, and display them <br/>
                        in a mobile app. I collected and processed the data <br/>
                        in an InfluxDB database. Additionally, during the project, <br/>
                        I learned about crisis management and communication. <br/>
                        I also had to do some last-minute adjustments to the front-end. <br/>
                        Project's status is closed and unfortunately app isn't available. <br/>
                        Our repo was long private, but now I got permission <br/>
                        to make it public from teammates. <br/>
                        <a href="https://github.com/DarjaDav0/Easy_Energy/tree/main" target="_blank" rel="noopener noreferrer">To project's repository</a>
                    </p>
                </div>
            </div>
            <div className="project-item">
                <img src="Vuforia-app.jpg" alt="Vuforia app" className="vuforia-image" />
                <div className="project-details">
                    <h2>Vuforia App</h2>
                    <p>This project I did during my studies. <br/>
                        The goal was to create an augmented reality app <br/>
                        using the Vuforia plugin on Unity. I created a simple <br/> 
                        app that displayed a 3D models of a cat and dog <br/>
                        when the camera recognized a specific image. <br/>
                        Also on video (link below) cat gets agressive <br/>
                        and throws a ball towards a dog, when tapped on the screen <br/>
                        or clicked. When dog gets hit by ball, it falls on its back.<br/>
                        <a href="https://youtu.be/GHus9KoNRDY" target="_blank" rel="noopener noreferrer">Video</a>
                        <br/> <a href="https://github.com/DarjaDav0/Vuforia-AR-app/tree/main" target="_blank" rel="noopener noreferrer">To repository</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;