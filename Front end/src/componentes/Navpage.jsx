import React from "react";
import { Routes, Route} from "react-router-dom";
import Formulario from "../componentes/Formulario"
//import Informacion from "../componentes/Informacion"
//import Productos from "./Productos/index"

const NavPage = () =>{
    return(
                <Routes>
                    {/*<Route path="/" element={<Productos />}/>
                    <Route path="/listaProductos" element={<Productos/>}/>*/}
                    <Route path="/formulario" element={<Formulario />}/>

                </Routes>
    )
}

export default NavPage; 