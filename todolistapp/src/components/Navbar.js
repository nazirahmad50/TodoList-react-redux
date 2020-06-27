import React from "react";
import {Link, NavLink} from "react-router-dom";

 const Navbar = ()=>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Logo</a>
                <ul className="right">
                    {/*use link instead so the request is not sent to server but react handles it*/}
                    <li><Link to="/">Home</Link></li>
                    {/*the navLink just adds extra classes like active*/}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </div>
        </nav>
    )
}
export default Navbar;