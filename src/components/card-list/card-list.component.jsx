import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.scss';
export const CardList= props =>(
    <div className='card-list'>
        {props.team.map(member=>(
            <Card key={member.id} member={member}/>
        ))}
    </div>
);