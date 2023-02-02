import React from "react";

export const NavBar = () => {
    return ( 
        <nav class="menu-navigation">
      <a href="#inicio">Inicio</a>
      <a href="#productos">Productos</a>
      <a href="#contacto">Contacto</a>
      <h2 class="mostrar-carrito" id="verCarrito"><i><lord-icon class="icon"src="https://cdn.lordicon.com/lqsduwhb.json" trigger="hover">
    </lord-icon></i><span id="cantidadCarrito" class="cantidad-carrito"></span> </h2>
      <div id="toggle">
        <i class="indicador"></i>
      </div>
    </nav>
    );
};

export default NavBar;
