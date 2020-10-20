import React from 'react';
import './requestpage.styles.scss';
import user_members from './requestpage.data.js';
import { CardrList } from '../../components/card-list/reqcard-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/type.jpg';
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
                <h1 style={{color :'white',fontSize: '50px',textAlign:'center'}} data-aos="fade-up" data-aos-duration="700">
                    Want to Earn Coins,</h1>
                    <p style={{fontSize: '40px',textAlign:'center'}} data-aos="fade-up" data-aos-duration="900">Start Taking Task For Others.</p><br></br>
                    <div align="right" data-aos="fade-up" data-aos-duration="1100"><Link className="button" to="/about">Get Started</Link></div>
                </Header>
                <div className="main-heading">
                    <h1>Available Requests</h1>
                </div>
                <CardrList team={team}/>
            </div>
        )
    }
}

export default Requestpage;