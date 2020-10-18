import React from 'react';

import './reqcard.styles.css';

export const Cardr = props =>(
    <div className = "card-container1">
        <div className="row1">
            <div className="column">
                <h2><b> {props.member.name} </b></h2>
            </div>
            <div className="column2" align="right">
                <button value="Take Task" className="btn"><b>Take Task</b></button>
            </div>           
        </div>
        <h3><b>Deadline:</b> {props.member.deadline} </h3>
        <h3><b>Coins:</b> {props.member.coins} </h3>
        <p> {props.member.note} </p>
    </div>
)