import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={classes.navbar}>
            <div className={classes.brand}>Brand</div>
            <ul className={classes.nav__list}>
                <li className={classes.list__item}><Link to="/">Home</Link></li>
                <li className={classes.list__item}><Link to="/gallery">Gallery</Link></li>
                <li className={classes.list__item}><Link to="/blog">About</Link></li>
            </ul>
        </div>
    )
}
