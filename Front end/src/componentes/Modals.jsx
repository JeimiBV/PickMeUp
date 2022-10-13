import React from "react";
import "../estilos/Modals.css"


function Modals({ children, estado, cambiarEstado }) {
    console.log(estado);
    return (
        <>
            {estado &&
                <div className="over">
                    {children}
                </div>
            }
        </>
    )

}
export default Modals