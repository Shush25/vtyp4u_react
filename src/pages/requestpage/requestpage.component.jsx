import React from 'react';
import './requestpage.styles.css';
import user_members from './requestpage.data.js';
import { CardrList } from '../../components/card-list/reqcard-list.component';

class Requestpage extends React.Component{
    constructor(){
        super();
        this.state={
            team:user_members
        };
    }
    render(){
        const {team} = this.state;
        return(
            <div className='aboutpage'>
                <div>Request Page</div>
                <CardrList team={team}/>
            </div>
        )
    }
}

export default Requestpage;