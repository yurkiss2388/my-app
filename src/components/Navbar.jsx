import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return <nav className='nav'>
        <div className='nav__item'>
            <a>Profile</a>
        </div>
        <div className='nav__item'>
            <a>Messeges</a>
        </div>
        <div className='nav__item'>
            <a>News</a>
        </div>
        <div className='nav__item'>
            <a>Music</a>
        </div >
        <div className='nav__item'>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;