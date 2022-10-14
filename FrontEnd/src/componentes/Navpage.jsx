import React from "react";
import { Routes, Route} from "react-router-dom";
import Formulario from "../componentes/Formulario"
import Productoslista from "./ListaProductos";
import Informacion from "../componentes/Informacion"
//import Productos from "./Productos/index"

const NavPage = () =>{
    return(
                <Routes>
                   
                    <Route path="/listaProductos" element={<Productoslista/>}/>
                    <Route path="/formulario" element={<Formulario />}/>
                    <Route path="/Informacion" element={<Informacion/>}/>

                </Routes>
    )
}

export default NavPage; 