import React, { Component } from 'react';

// Stateless Function Component

const NavBar = (props) =>{
  console.log("Render - NavBar")
  return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge rounded-pill bg-secondary">
            {props.totalCounter}
          </span>
        </a>
    </nav>
  );
}
 
export default NavBar;