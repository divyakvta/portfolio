import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {experience.map((item, id) => {
            return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(item.imageSrc)} alt={item.title} />
              </div>
              <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((item, id) => (
            <li key={id} className={styles.historyItem}>
              <img src={getImageUrl(item.imageSrc)} alt={item.role}
               />
              <div className={styles.historyItemDetails}>
                <h3>{item.role},  {item.organisation}</h3>
               <p>
                  {item.startDate} - {item.endDate}
                </p>
                <ul>
                  {item.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
