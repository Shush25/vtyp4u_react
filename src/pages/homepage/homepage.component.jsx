import React from 'react';
import './homepage.styles.scss';

import { Header } from '../../components/header/header.component';

import Header_image from '../../assets/home.jpg';

const Homepage= () => (
    <div className="homepage">
        <Header Header_image={Header_image}>
            <div style={{color :'white',}}>
                HomePage
            </div>
        </Header>
        <h2>
            Homepage
        </h2>
    </div>
);

export default Homepage;