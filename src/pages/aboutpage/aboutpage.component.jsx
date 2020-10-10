import React from 'react';
import './aboutpage.styles.css';
import team_members from './aboutpage.data.js';
import { CardList } from '../../components/card-list/card-list.component';
import { Header } from '../../components/header/header.component';
class Aboutpage extends React.Component{
    constructor(){
        super();
        this.state={
            team:team_members
        };
    }
    render(){
        const {team} = this.state;
        return(
            <div className='aboutpage'>
                <Header page_name="ABOUT PAGE"/>
                <CardList team={team}/>
            </div>
        )
    }
}

export default Aboutpage;