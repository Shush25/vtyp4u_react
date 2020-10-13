import React from 'react';
import './requestpage.styles.css';
import user_members from './requestpage.data.js';
import { CardrList } from '../../components/card-list/reqcard-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/about.jpg';

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
                    <Header Header_image={Header_image}>
                    <div style={{color :'white',}}>
                        Request Page
                    </div>
                </Header>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <CardrList team={team}/>
            </div>
        )
    }
}

export default Requestpage;