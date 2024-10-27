import React from 'react';
import './Aboutsection.css';
import profile from '/profile.jpg';

function Aboutsection() {
    return (
        <div className="Aboutsection">
            <h2>About Me</h2>
            <div className="Aboutsection-grid">
                <div className="Aboutsection-img-container">
                    <img
                        src={profile}
                        alt="Profile picture of Darja Davydova"
                        className="Aboutsection-img"
                    />
                </div>
                <div className="Aboutsection-text">
                    <p>
                        Hi! I am Darja Davydova, Third-year Information Technology <br/>
                        student at Lapland UAS. I'm passionate about web <br/>
                        development and learning new things. I’m focused on <br/>
                        creating user-friendly, efficient web solutions and am <br/>
                        enthusiastic about the opportunity to contribute to and  <br/>
                        grow within a professional team. <br/>
                        In my free time, I enjoy tasting different kinds of tea <br/>
                        and baking sweet pastries.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutsection;