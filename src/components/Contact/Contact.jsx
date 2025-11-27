import React from 'react';
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
  <footer className={styles.container} id='contact'>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="" />
        <a href="mailto:divyawnd@gmail.com">divyawnd@gmail.com</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
        <a href="https://www.linkedin.com/in/divyawnd/">https://www.linkedin.com/in/divyawnd</a>
        </li>
        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="" />
        <a href="https://github.com/divyakvta">https://github.com/divyakvta</a>
        </li>
    </ul>
  </footer>
  )
}

export default Contact
