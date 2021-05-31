import React from 'react'
import styles from './main.module.css'
import Pagination from '../Pagination/Pagination'
import Generate from '../SloganCard/Generate/Generate'
import Slogancard from '../SloganCard/Slogancard'
import Slogans from '../Slogans/Slogans'


export default function Main() {
    return (
        <div className={styles.main}>
            <Slogancard />
            <Generate />
            <Slogans />
            <hr className={styles.lines}/>
            
            <Pagination />                    
        </div>
    )
}
