import React from 'react';
import n from './NavbarBF.module.css';

const NavbarBF = (props) => {
    return(
      <div className={n.wrapper_navbarBF}>       
          <img src={props.avatar} alt=""/>
          <div>
          {props.name}
          </div>        
      </div>
    )
}

export default NavbarBF;