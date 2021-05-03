import React from "react";
import {Link} from 'react-router-dom'
 
const Nav = () => {
  return (
    <nav className="navbar navbar-light px-5">
      <div className="container">
        <Link to={'/'}><span className="user__nav__brand">MyShop</span></Link>
        <div className="user__nav">
          <div className="user__nav__name">
            <span>Welcome</span>
            <b>Name</b>
          </div>
          <div className="user__nav__links d-flex">
            <a href="http://localhost:8080/account/profile">My profile</a>
            <a href="http://localhost:8080/logout">Logout</a>
            <a href="http://localhost:8080/signIn">Log-in</a> 
            <a href="http://localhost:8080/signUp">Sign up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
