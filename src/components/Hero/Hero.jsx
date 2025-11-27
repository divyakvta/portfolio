import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm <span>Divya T P</span></h1>
            <p className={styles.description}>I'm a full stack developer based in India looking for a job in the field of web development.
            </p>
            <a href="mailto:divyawnd@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <div className={styles.heroImgContainer}>
        <img src={getImageUrl("hero/heroImage1.jpg")} alt="hero" className={styles.heroImg} />
        </div>
        
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
