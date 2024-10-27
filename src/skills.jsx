import React, { useState } from 'react';
import './skills.css';

const Skill = ({ name, rating, hoverSkill, setHoverSkill }) => {
    return (
        <dl
            className="skill"
            onMouseEnter={() => setHoverSkill(name)}
            onMouseLeave={() => setHoverSkill(null)}
        >
            <dt className={hoverSkill === name ? 'bold' : ''}>{name}</dt>
            <dd>
                {[1, 2, 3, 4, 5].map((star) => (
                    <i
                        key={star}
                        className={`fa fa-star ${star <= rating ? 'filled' : ''} ${hoverSkill === name ? 'hovered' : ''}`}
                    >
                        {star <= rating ? '\u2605' : '\u2606'}
                    </i>
                ))}
            </dd>
        </dl>
    );
};

const Skills = () => {
    const [hoverSkill, setHoverSkill] = useState(null);

    const skillsData = {
        Coding: [
            { name: 'Python', rating: 4 },
            { name: 'JavaScript', rating: 4 },
            { name: 'ReactJS', rating: 4 },
            { name: 'CSS', rating: 4 },
            { name: 'HTML', rating: 3 },
            { name: 'C#', rating: 3 },
            { name: 'SQL', rating: 4 },
            { name: 'Kotlin', rating: 3 },
        ],
        Tools: [
            { name: 'GitHub / Gitlab', rating: 4 },
            { name: 'Insomnia', rating: 3 },
            { name: 'Scrum / Agile', rating: 4 },
            { name: 'MongoDB', rating: 4 },
            { name: 'InfluxDB', rating: 5 },
            { name: 'Supabase', rating: 3 },
            { name: 'MySQL Workbench', rating: 4 },
            { name: 'Android Studio', rating: 4 },
            { name: 'Unity', rating: 2 },
            { name: 'Wordpress', rating: 3 },
        ],
        Languages: [
            { name: 'Finnish', rating: 5 },
            { name: 'Russian', rating: 5 },
            { name: 'English', rating: 4 },
            { name: 'Swedish', rating: 1 },
        ],
    };

    return (
        <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
            {Object.keys(skillsData).map((category) => (
                <div key={category} className="skills-category">
                    <h3>{category}</h3>
                    {skillsData[category].map((skill) => (
                        <Skill key={skill.name} name={skill.name} rating={skill.rating} hoverSkill={hoverSkill} setHoverSkill={setHoverSkill}/>
                    ))}
                </div>
            ))}
        </div>
    </div>
    );
};

export default Skills;