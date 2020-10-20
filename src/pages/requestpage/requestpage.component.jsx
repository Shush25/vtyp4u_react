import React from 'react';
import './requestpage.styles.scss';
import user_members from './requestpage.data.js';
import { CardrList } from '../../components/card-list/reqcard-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/about.jpg';
import {Link} from 'react-router-dom';

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
                <h1 style={{color :'white',fontSize: '50px'}}>
                    Hello, Want to Earn Coins,</h1>
                    <p style={{fontSize: '40px'}}>Start Taking Task For Others.</p><br></br>
                    <div align="right"><Link className="button" to="/about">Type for Me</Link></div>
                </Header>
                <br></br><br></br><br></br><br></br><br></br>
                <CardrList team={team}/>
            </div>
        )
    }
}

export default Requestpage;