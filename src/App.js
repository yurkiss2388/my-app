import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Header />
        <Navbar />
        <Profile />
        <div class='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' compoment={Profile} />
          <Dialogs />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
