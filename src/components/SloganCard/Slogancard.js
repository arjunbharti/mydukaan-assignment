import React from 'react'
import styles from './slogancard.module.css'

export default function Slogancard() {
    return (
        <div className={styles.carditem}>
            <p className={styles.title}>Free slogan maker</p>
            <p className={styles.titledes}>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
            <p className={styles.word}>Word for your slogan</p>
            <input className={styles.inputf} id={styles.cozy} type="text" placeholder="cozy" />
            <button className={styles.btnslogan}>
                Generate Slogan
            </button>   
            <hr className={styles.lines}/>
        </div>
    )
}
