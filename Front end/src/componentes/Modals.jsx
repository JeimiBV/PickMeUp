import React from "react";
import"../estilos/Modals.css"
function Modals({texto}){
return(
    <div className="contenedor-modals">
        <h2>
            {texto}
        </h2>
    </div>
)

}
export default Modals