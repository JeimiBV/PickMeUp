import React,{useState} from "react";
import "../estilos/Informacion.css";
import imagen from "../imagenes/pique.jpg";
import { Link } from "react-router-dom";
import Productoslista from "../componentes/ListaProductos";
function Informacion(){
    
    return (
    <>
        <div className="todo">
        
        <div className="titulo">
        <h1> PIQUE MACHO</h1>        
        </div>


        <div className="Informacion">
            
            <div className="desytip">
                <div className="descripcion">

            
                    <h2>Descripcion</h2>

                    <br />Consiste en trozos de carne de vaca y patatas  <br />
                    fritas. También se le añade cebolla, locoto,  <br />
                    huevos duros,queso cortado, mostaza, mayonesa <br />
                    y kétchup.
                 
                </div>
                 
                    <div className="tipo">
                    <h2><br />Tipo</h2>
                    <br /> Comida
                    </div>

            </div>
            <div className="cerrar">
            <Link to="/listaProductos">
                cerrar</Link>
            </div>
            
                <div className="pique">

                    <img className= "imagen" src={imagen} alt="" />

                </div>
            </div>
            
            </div>
            </>
           


    )

}

export default Informacion
