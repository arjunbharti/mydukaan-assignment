import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.navItems}>
        <img className={styles.footerlogo} src="white.svg" alt="" />
        <div className={styles.footeritems}>
          <div style={{ backgroundColor: "black" }}>
            <ul style={{ backgroundColor: "black" }}>
              <li className={styles.footeritemss}>Contact</li>
              <li className={styles.footeritemss}>FAQ's</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <ul>
              <li className={styles.footeritemss}>Tutorials</li>
              <li className={styles.footeritemss}>Blog</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <ul>
              <li className={styles.footeritemss}>Privacy</li>
              <li className={styles.footeritemss}>Banned Items</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <ul>
              <li className={styles.footeritemss}>About</li>
              <li className={styles.footeritemss}>Jobs</li>
            </ul>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <ul>
              <li className={styles.footeritemss}>Facebook</li>
              <li className={styles.footeritemss}>Twitter</li>
              <li className={styles.footeritemss}>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.trademark}>Dukaan 2020, All rights reserved.</p>

        <div className={styles.madein}>
          <p className={styles.made}>Made in</p>
          <img className={styles.flag} src="Group.svg" alt="" />
        </div>
      </div>
      {/* <div className={styles.line2}>&nbsp;</div> */}
    </div>
  );
}
