import React from "react";
import styles from './Loader.scss';

const Loader = () => {
    return (
        <div className={styles['loader-wrapper']}>
            <div className={styles['sk-folding-cube']}>
                <div className={styles['sk-cube1'] + ' ' + styles['sk-cube']}></div>
                <div className={styles['sk-cube2'] + ' ' + styles['sk-cube']}></div>
                <div className={styles['sk-cube4'] + ' ' + styles['sk-cube']}></div>
                <div className={styles['sk-cube3'] + ' ' + styles['sk-cube']}></div>
            </div>
        </div>
    )
};

export default Loader;