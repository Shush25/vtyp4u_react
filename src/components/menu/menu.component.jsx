import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

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
                    <Link className='options' to='/request'>
                        REQUESTS
                    </Link>
                </li>
                {
                    currentUser ?
                    <li>
                        <div className="dropdown">
                            <div class="options">{currentUser.displayName}</div>
                            <div class="dropdown-content">
                                <div className='options' onClick={() => auth.signOut()}>SIGNOUT</div>
                                <Link className='options' to='/profile'>PROFILE</Link>
                            </div>
                        </div>
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Menu);