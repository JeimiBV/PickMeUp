import React from "react";
import Image from "../imagenes/logo.png";
import "../estilos/header.css"


function Header(){
return <div className="contenedor-cabecera">
            <img className="logo" src={Image}/>
        <h1 className="nombre">
            Pick-Me-Up
        </h1>
        <h1 className="user">
            user
        </h1>
       
    </div>


}
export default Header;