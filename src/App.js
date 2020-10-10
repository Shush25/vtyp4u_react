import React from 'react';
import {Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import Menu from './components/menu/menu.component';
AOS.init({easing:"ease-in-out",});
function App(){
  return(
    <div>
      <Menu/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage}/>
      </Switch>
    </div>
  );
}

export default App;