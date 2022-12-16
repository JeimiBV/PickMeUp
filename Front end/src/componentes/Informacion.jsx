import React,{useState} from "react";
import "../estilos/Informacion.css";
import imagen from "../imagenes/pique.png";
import { Link } from "react-router-dom";

function Informacion(){
    
    return (
    <>
        <div className="todo">
        
             <h1 className="titulo"> PIQUE MACHO</h1>  


                    <div className="Informacion">
                        
                            <div  className="desytip">
                               

                                    <h2 className="encabezado">Descripcion:</h2>

                                    <p className="Parrafo">Consiste en trozos de carne de vaca y patatas 
                                    fritas. También se le añade cebolla, locoto,  
                                    huevos duros,queso cortado, mostaza, mayonesa 
                                    y kétchup .</p>
                                   <h2 className="encabezado">Tipo de producto</h2> <p className="Parrafo">Comida</p>  
                                    
                                   
                                    <img width="100px" heigth="100px" className= "imagen_1" src={imagen} alt="" />        
                                     
                                   
                                    <Link to="/listaProductos"><button className="b12">cerrar</button>
                                    </Link>
                                    

                        </div>    
                            

                            
                    </div>
                
        </div>
            </>
           


    )

}

export default Informacion