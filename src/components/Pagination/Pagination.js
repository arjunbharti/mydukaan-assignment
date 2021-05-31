import React from 'react'
import styles from './pagination.module.css'

export default function Pagination() {
    return (
        <div className={styles.pagination}>
        <div>&nbsp;</div>
        <div className={styles.pagesNo}>

            <p className={styles.pagetext}>1</p>
            <p className={styles.pagetext}>2</p>
            <p className={styles.pagetext}>3</p>
            <p className={styles.pagetext}>...</p>
            <p className={styles.pagetext}>21</p>
                    </div>

            <div>   
            <p className={styles.pagetext}>Next &rarr;</p>

            </div>
        </div>
    )
}
