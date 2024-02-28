import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
          <nav className="navbar navbar-light bg-light">
              <a className="navbar-brand" href="#">
                Navbar <span className="badge rounded-pill bg-secondary">
                  {this.props.totalCounter}
                </span>
              </a>
          </nav>
        );
    }
}
 
export default NavBar;