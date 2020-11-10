import React from 'react';
import { connect } from 'react-redux';
import './profile.styles.scss';
import NewRequest from '../../components/new-request/new-request.component';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CustomButton from '../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';

const Profile=({ currentUser, history })=>(
    <div className="profile">
        <h1 align="center">Profile</h1>
        {
            currentUser ? (
                <div>
                <h2>User Name: {currentUser.displayName}</h2>
                <h2>User UID: {currentUser.id}</h2>
                <h2>User email: {currentUser.email}</h2>
                <NewRequest/><br></br>
                <CustomButton onClick ={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
                </div>
            ):(
                <div>Loading...</div>
            )
        }
    </div>
);

const mapStateToProps= createStructuredSelector({
    currentUser: selectCurrentUser
})
export default withRouter(connect(mapStateToProps)(Profile));