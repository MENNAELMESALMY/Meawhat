import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-wrapper  orange darken-4">
    <div className="container">
     <div className="brand-logo"><Link to="/">
     <i className="fa fa-paw" style={{marginTop:15 +"px"}}></i>Meawhat</Link></div>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className="NavOptions"><Link style={{textDecoration: "none",color:"white"}} to="/" >Home</Link></li>
        <li className="NavOptions"><Link style={{textDecoration: "none",color:"white"}} to="/About">About</Link></li>
     </ul>
     </div>
    </nav>
  );
};

export default NavBar;
