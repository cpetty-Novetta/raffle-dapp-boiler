import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Header extends React.Component {
  render() {
    var navStyle={
      backgroundColor: "#42a5f5", 
      paddingLeft: "12px"
    }
    return (
          <nav style={navStyle}>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Raffle Dapp</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>
          </nav>
    );
  }
}
