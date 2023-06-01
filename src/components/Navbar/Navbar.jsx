import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
    return <nav className={styles.nav}>
        <div className={styles.navbar}></div>
        <div className={styles.item}>
            <NavLink to='/profile' activeClassName={styles.activeLink} >Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/dialogs ' activeClassName={styles.activeLink}>Messeges</NavLink>
        </div>
        <div className={styles.item}>
            <a>News</a>
        </div>
        <div className={styles.item}>
            <a>Music</a>
        </div >
        <div className={styles.item}>
            <a>Settings</a>
        </div>
        
    </nav>
}

export default Navbar;