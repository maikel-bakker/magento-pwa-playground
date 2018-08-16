import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';

const Header = (props) => {
    return (
        <header className={styles['header']}>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/categories'>Categories</NavLink></li>
                    {props.children}
                </ul>
            </nav>
        </header>
    );
};

export default Header;