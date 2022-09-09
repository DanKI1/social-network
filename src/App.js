// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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
        <Navbar/>
        <Routes>
          <Route path="/profile/*" element = {<Profile post_datas = {props.post_datas}/>}/>
				  <Route path="/dialogs/*" element = {<Dialogs message_datas = {props.message_datas} dialog_datas = {props.dialog_datas}/>}/>
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
