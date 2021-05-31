
import '../logo.svg'

import '../2.svg'
import '../card1.svg'
import '../card2.svg'
import '../card3.svg'
import '../card4.svg'
import '../white.svg'
import '../Group.svg'
import '../next.svg'
import styles from './navbar.module.css'


function Navbar() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="logo.svg" alt="" />
            <div className={styles.topbutton}>
                <a href="#sign" className={styles.signin}>Sign In</a>
                <button className={styles.btnpc}>
                    <a href="#hmm" className={styles.dukaantext}>Dukaan for PC</a>
                </button>
            </div>
            
        </div>    
    )
}

export default Navbar;
