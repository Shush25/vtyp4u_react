import React from 'react';
import { connect } from 'react-redux';
import './profile.styles.scss';

const Profile=({ currentUser })=>(
    <div className="profile">
        <h1 align="center">Profile</h1>
        {
            currentUser ? (
                <div>
                <h2>User Name: {currentUser.displayName}</h2>
                <h2>User UID: {currentUser.id}</h2>
                <h2>User email: {currentUser.email}</h2>
                </div>
            ):(
                <div></div>
            )}
    </div>
);

const mapStateToProps= state =>({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Profile);