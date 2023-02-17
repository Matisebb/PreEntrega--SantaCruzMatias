import './NavBar.css'
import CartWidget from "../CartWidget";
import React from "react";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return ( 
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
                    <NavLink className="nav-link" to='/'>Santa Pizza</NavLink>
                </div>
                <ul className="nav-list">
                    <li>
                        <NavLink className="nav-link" to='/categoria/pizzas'>Pizzas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/categoria/hamburguesas'>Hamburguesas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/cart'>
                            <CartWidget/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

