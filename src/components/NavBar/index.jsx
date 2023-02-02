import CartWidget from "../CartWidget";
import React from "react";

export const NavBar = () => {
    return ( 
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
                    <a className="nav-link" href="#">Santa Pizza</a>
                </div>
                <ul className="nav-list">
                    <li>
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li>
                        <a className="nav-link" href="#">
                            <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
