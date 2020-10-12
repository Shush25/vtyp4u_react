import React from 'react';
import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';


import './menu.styles.scss';

const Menu = ({currentUser}) =>(
    <div className={`header1`} data-aos="custom-slideDown" data-aos-duration="900">
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
                        REQUESTS
                    </Link>
                </li>
                {
                    currentUser ?
                    <li>
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    </li>
                    :
                    <li>
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    </div>
);

export default Menu;