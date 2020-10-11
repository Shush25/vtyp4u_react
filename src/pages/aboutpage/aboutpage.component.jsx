import React from 'react';
import './aboutpage.styles.scss';
import team_members from './aboutpage.data.js';
import { CardList } from '../../components/card-list/card-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/about.jpg';
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
                <Header Header_image={Header_image}>
                    <div style={{color :'white',}}>
                        About Page
                    </div>
                </Header>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <CardList team={team}/>
            </div>
        )
    }
}

export default Aboutpage;