import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';

const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.jpg")} alt="about-image" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            {skills.map((skill, id) => (
                <li key={id} className={styles.aboutItem}>
                    <img 
                        src={getImageUrl(skill.imageSrc)} 
                        alt={`${skill.title}-icon`} 
                        className={styles.aboutIcon} 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>   
                </li>
            ))}
        </ul>
    </div>
   </section>
  )
}

export default About
