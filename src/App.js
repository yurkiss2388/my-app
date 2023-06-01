import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div class='app-wrapper-content'>
          <Routes>
          <Route path='/dialogs' element={<Dialogs/>} />
          <Route path='/profile' element={<Profile/>} />
          </Routes>
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
