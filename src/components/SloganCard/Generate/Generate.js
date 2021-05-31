import React from 'react'
import styles from './generate.module.css'

export default function Generate() {
    return (
        <div className={styles.generated}>  
            <p className={styles.cozyresult}>We have generated 1,023 slogans for “cozy”</p>
            <button className={styles.download}>
                <a href="#hmm" className={styles.downloadtext}>Download all</a>
            </button>
        </div>
    )
}
