import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectAvailableReq} from '../../redux/requestpage/requestpage.selector';

import './requestpage.styles.scss';
import  {CardrList}  from '../../components/card-list/reqcard-list.component';
import { Header } from '../../components/header/header.component';
import Header_image from '../../assets/type.jpg';
import {Link} from 'react-router-dom';

const Requestpage =({available_request})=> (
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
        <CardrList available_request={available_request}/>     
    </div>
);

const mapStateToProps = createStructuredSelector({
    available_request: selectAvailableReq
});

export default connect(mapStateToProps)(Requestpage);