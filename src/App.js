import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import RequestPage from './pages/requestpage/requestpage.component';
import Menu from './components/menu/menu.component';
import Footer from './components/footer/footer.component';
import Profile from './pages/profile/profile.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
AOS.init({easing:"ease-in-out",once:true,});
class App extends React.Component{
    
  unsubscribeFromAuth = null;

  componentDidMount() {
    const{setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
        setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return(
      <div>
        <Menu/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage}/>
          <Route path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/request' component={RequestPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);