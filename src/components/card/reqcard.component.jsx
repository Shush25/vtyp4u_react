import React from 'react';

import './reqcard.styles.css';

export const Cardr = props =>(
    <div className = "card-container">
            <h2><b> {props.member.name} </b></h2>
            <p><b>Deadline:</b> {props.member.deadline} </p>
            <p><b>Coins:</b> {props.member.coins} </p>
            <p> {props.member.note} </p>
    </div>
)