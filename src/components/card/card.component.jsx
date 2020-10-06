import React from 'react';

import './card.styles.scss';

export const Card= props =>(
    <div className='card-container'>
        <img
            alt={props.member.name}
            src=''
        />
        <h2>{props.member.name}</h2>
        <p>{props.member.email}</p>
    </div>
)