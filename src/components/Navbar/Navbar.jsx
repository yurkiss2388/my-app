import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={styles.navbar}></div>
        <div className={styles.nav__item}>
            <a>Profile</a>
        </div>
        <div className={styles.nav__item}>
            <a>Messeges</a>
        </div>
        <div className={styles.nav__item}>
            <a>News</a>
        </div>
        <div className={styles.nav__item}>
            <a>Music</a>
        </div >
        <div className={styles.nav__item}>
            <a>Settings</a>
        </div>
        <div className='nav__item'>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;