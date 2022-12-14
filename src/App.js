// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


function App(props) {
  
  return (
    <BrowserRouter>
          <div className="wrapper">
        <Header/>
        <div className='wrapper-content'>
        <Navbar sidebarFriends = {props.state.sidebarFriends}/>
        <Routes>
          <Route path="/profile/*" element = {<Profile store = {props.store}/>}/>
				  <Route path="/dialogs/*" element = {<DialogsContainer store = {props.store}/>}/>
          <Route path="/news/*" element = {<News />}/>
				  <Route path="/music/*" element = {<Music />}/>
          <Route path="/settings/*" element = {<Settings />}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
