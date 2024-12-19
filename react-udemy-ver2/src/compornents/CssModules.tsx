import React from 'react';
import styles from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>css modules</p>
      <button className={styles.button}>fight!!</button>
    </div>
  )
}
