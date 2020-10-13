import React from 'react';
import {Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import Menu from './components/menu/menu.component';
import Footer from './components/footer/footer.component';
import Profile from './pages/profile/profile.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';

AOS.init({easing:"ease-in-out",once:true,});
class App extends React.Component{
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }
    
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else{
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return(
      <div>
        <Menu currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage}/>
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/profile' component={Profile} />
          <Route exact path='/request' component={RequestPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
