import React from 'react';
import {Link} from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () =>(
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <nav className="temp">
            <ul className="menu">
                <li>
                    <Link className='options' to='/'>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link className='options' to='/about'>
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link className='options' to='/'>
                        LOGIN
                    </Link>
                </li>
                <li>
                    <Link className='options' to='/'>
                        TYPER
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Header;