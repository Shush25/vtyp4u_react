import React from 'react';
import './aboutpage.styles.scss';
import team_members from './aboutpage.data.js';
import { CardList } from '../../components/card-list/card-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/about.jpg';
import {Link} from 'react-router-dom';
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
                <h1 style={{color :'white',fontSize: '50px',textAlign:'center'}}>
                We are Procrastinators,</h1>
                <p style={{fontSize: '40px',textAlign: 'center'}}>But we get the work done.</p><br></br>
                <div align="right"><Link className="button" to="/about">Contact Us</Link></div>
                </Header>
                <div className="main-heading">
                <h1>Know more about Us!!!</h1></div>
                <div className="features">
                    <div className="blocks">
                    <div className="para">
                        <h1>Our Goal</h1>
                        <p>Our main goal in making this e-commerce website was to put into use what we learned during our Course of Internet Web Programming along with the extra learning we did about React and Other new Technology being used now a days.
                        While bringing out something we can be proud to call "We made this website !!!"</p>
                        <div className="forScroll"><a href="https://github.com/Shush25/vtyp4u_react"  className="scroll button">Visit our Github Repository</a></div>
                    </div>
                    <img src={require('../../assets/about-goal.jpg')} alt="why"/>
                    </div>
                    <div className="blocks">
                    <img src={require('../../assets/about-future.jpg')} alt="why"/>
                    <div className="para">
                        <h1>Into the Future!!!</h1>
                        <p>In the future we would love to work on many different projects like this one and continue to improve and learn more about Web development and one day become someone worthy of being called a Professional Senior Web Developer.</p>
                    </div>
                    </div>
                </div>
                <div id="contactUs" className="main-heading" style={{backgroundColor: 'rgb(255, 236, 218)',}}>
                <h1>Contact Us</h1></div>
                <CardList team={team}/>
            </div>
            
        )
    }
}

export default Aboutpage;