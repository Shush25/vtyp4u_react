import React from 'react';

import './header.styles.scss';

export const Header= (props)=>(
    <div className="header">
        <div data-aos="zoom-in-up" data-aos-duration="300">
            {props.page_name}
        </div>
    </div>
);