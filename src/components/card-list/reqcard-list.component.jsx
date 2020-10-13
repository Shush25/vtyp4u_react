import React from 'react';
import { Cardr } from '../card/reqcard.component';
import './reqcard-list.styles.css';
export const CardrList= props =>(
    <div className='cardr-list'>
        {props.team.map(member=>(
            <Cardr key={member.id} member={member}/>
        ))}
    </div>
);