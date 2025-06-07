import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spaceLoader}>
      <div className={styles.astronaut}>
        <div className={styles.astronautHelmet}>
          <div className={styles.helmetGlass}>
            <div className={styles.helmetInnerGlass} />
            <div className={styles.helmetReflection} />
          </div>
          <div className={styles.antenna} />
        </div>
        <div className={styles.astronautBody}>
          <div className={styles.suitPattern} />
          <div className={styles.chestPanel}>
            <div className={styles.button}></div>
            <div className={styles.button}></div>
            <div className={styles.display}></div>
          </div>
        </div>
        <div className={styles.arms}>
          <div className={`${styles.arm} ${styles.armLeft}`}>
            <div className={styles.glove} />
          </div>
          <div className={`${styles.arm} ${styles.armRight}`}>
            <div className={styles.glove} />
          </div>
        </div>
        <div className={styles.legs}>
          <div className={`${styles.leg} ${styles.legLeft}`}>
            <div className={styles.boot} />
          </div>
          <div className={`${styles.leg} ${styles.legRight}`}>
            <div className={styles.boot} />
          </div>
        </div>
      </div>

      <div className={styles.spaceEnvironment}>
        <div className={styles.starsContainer}>
          <div className={`${styles.stars} ${styles.starsNear}`} />
          <div className={`${styles.stars} ${styles.starsMid}`} />
          <div className={`${styles.stars} ${styles.starsFar}`} />
        </div>
        <div className={styles.meteors}>
          <div className={`${styles.meteor} ${styles.meteor1}`} />
          <div className={`${styles.meteor} ${styles.meteor2}`} />
          <div className={`${styles.meteor} ${styles.meteor3}`} />
        </div>
        <div className={styles.planets}>
          <div className={`${styles.planet} ${styles.planet1}`}>
            <div className={styles.planetRing} />
          </div>
          <div className={`${styles.planet} ${styles.planet2}`} />
        </div>
      </div>

      <div className={styles.loadingContainer}>
        <div className={styles.loadingProgress}>
          <div className={styles.progressBar} />
        </div>
        <div className={styles.loadingText}>
          <span className={styles.dot1}>.</span>
          <span className={styles.dot2}>.</span>
          <span className={styles.dot3}>.</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
