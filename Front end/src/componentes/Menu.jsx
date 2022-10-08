import React from "react";
import "../estilos/Menu.css"
import {Datos_Menu} from "./Datos_Menu";

function Menu() {
    return (<div className="Menu">
        <ul className="listaMenu">
            {Datos_Menu.map((val, key) => {
                return (
                    <li key={key}
                className = "row"
                id={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}
                >
                    <div>{val.title}</div>

                </li>
                );
            })}

        </ul>
    </div>
    );


}
export default Menu
