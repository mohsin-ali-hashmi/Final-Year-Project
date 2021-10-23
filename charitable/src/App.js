import React from 'react';

import { Route } from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Home from './pages/Home';
import MainForm from './components/accountBox/MainForm';
import MainForms from './components/userAccountBox/MainForms';
import UserHome from './pages/user/Home/UserHome';
import PrivateRoute from './components/PrivateRoute'
import NGOHome from './pages/ngo/Home/NGOHome';
import DisplayForm from './components/donationForm/DisplayForm';
import AllCards from './pages/ngo/ngoCards/AllCards';
import AcceptedCards from './pages/ngo/ngoCards/AllCardsAccepted';
import Message from './components/chat/Chat';
import List from './components/ngoList/List';
import About from './components/about/About';


function App() {  
  
  

  return (
    <>
      <GlobalStyle/>
      
      <Route path="/MainForm" component={MainForm} />
        
      
      <Route path="/MainForms" component={MainForms} />
      <Route path="/About" component={About} />
        <Route path="/DisplayForm" component={DisplayForm} />
        <Route path="/AllCards" component={AllCards} />
        <Route path="/AcceptedCards" component={AcceptedCards} />
        <Route path="/Message" component={Message} />
        <Route path="/List" component={List} />
      
      <Route exact path="/" component={Home} />
      
      <PrivateRoute path='/user/home' forceRefresh={true}>
         <UserHome />
      </PrivateRoute>
      <PrivateRoute path='/ngo/home'>
        <NGOHome />
      </PrivateRoute>
    </>
  );
};

export default App;
