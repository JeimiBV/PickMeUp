import React from "react";
import "../estilos/productos.css";
import IMG1 from "../imagenes/pique.png";
import { Link } from "react-router-dom";



function Productoslista() {

    return(   
    <>
     <div className="container">

         <h1 className="title"> Lista de productos </h1> 
         
                <div className="productos">  
                    <div className="producto"> 
                    <Link to = "/Informacion">           
                            <div className="producto_imagen">
                                <img className ="imagen"src={IMG1} alt="" />
                            </div>      
                            </Link>         

                        <div className="P_footer">
                                    <h1 className="nombre"> pique</h1>       
                        </div>    
                    </div>
                </div>  
             
    </div>
    </>    
    )
}

export default Productoslista