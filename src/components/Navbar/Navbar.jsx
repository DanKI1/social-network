import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = (props) => {
  debugger;
    return(
        <section className={n.sidebar}>
      {/* <div className={n.navbar}> */}
        <div className={n.nav_menu}>
          <NavLink className = { navData => navData.isActive ? n.active : n.nonactive } to="/profile">Profile</NavLink>
        </div>
        <div className={n.nav_menu}>
          <NavLink className = { navData => navData.isActive ? n.active : n.nonactive } to="/dialogs">Messages</NavLink>
        </div>
        <div className={n.nav_menu}>
          <NavLink className = { navData => navData.isActive ? n.active : n.nonactive } to="/news">News</NavLink>
        </div>
        <div className={n.nav_menu}>
          <NavLink className = { navData => navData.isActive ? n.active : n.nonactive } to="/music">Music</NavLink>
        </div>
        <div className={n.nav_menu}>
          <NavLink className = { navData => navData.isActive ? n.active : n.nonactive } to="/settings">Settings</NavLink>
        </div>
      {/* </div> */}
      <br/>
      <br/>
      <br/>
      Best friends
        <div>
          <img width ="60px" src={props.state[0].avatar} alt=""/>
          <div>
          {props.state[0].name}
          </div>
         
        </div>
      </section>
    )
}

export default Navbar;