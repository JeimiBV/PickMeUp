import React from "react";
//import { FormularioEstilos } from "../elementos/FormularioEstilos";
import "../estilos/formulario.css"



function Form({ estado1, estado2, estado3, estado4 }) {

    const validar = (palabra) => {
        if (palabra <= 3 && palabra >= 30) {
            estado1 = true
            console.log(palabra)
        }

    }
    return <div className="contenedor">
        <div className="elementos-form">
            <label className="label">
                Nombre del producto
            </label>
            <input className="entrada" placeholder="Ingrese el nombre" onChange={ev => console.log(ev.target.value)}></input>
            <h3 className={estado1 ? "validacion" : "invisible"}>
                El nombre debe contener de 2 a 30 caracteres
            </h3>
            <label className="label">
                Descripción del producto
            </label>
            <input className="entrada" placeholder="Ingrese la descripción"></input>
            <h3 className={estado2 ? "validacion" : "invisible"}>
                La descripción debe contener de 10 a 100 caracteres
            </h3>
            <label className="label">
                Tipo de producto
            </label>
            <select className="drop" placeholder="Seleccione el tipo">
                <option value="alimentosEnlatados">Alimentos enlatados</option>
                <option value="bebidasCalientes">Bebidas calientes</option>
                <option value="bebidasFrías">Bebidas frías</option>
                <option value="carnesPescado">Carnes y pescado</option>
                <option value="cereales">Cereales</option>
                <option value="comida">Comida</option>
                <option value="ensalada">Ensalada</option>
                <option value="frutasVerduras">Frutas y verduras</option>
                <option value="lácteosHuevos">Lácteos y huevos</option>
                <option value="panaderíaPastelería">Panadería y pastelería</option>
                <option value="postres">Postres</option>
                <option value="snacks">Snacks</option>
            </select>
            <h3 className={estado3 ? "validacion" : "invisible"}>
                Se debe seleccionar una opción
            </h3>
            <label className="label">
                Insertar imagen
            </label>

            <button className="botonA">
                Seleccionar archivo
            </button>
            <h3 className={estado4 ? "validacion" : "invisible"}>
                Se debe seleccionar un archivo
            </h3>


            <button className="botonR">
                Registrar
            </button>

        </div>




    </div>


}
/*const Formulario = () => {
    return (
        
        <main>
            <Formulario action="">

                <div>
                    <label htmlFor="">Usuario</label>
                    <input> type="text" placeholder="usuario"</input>
                    <p>Lorem</p> 
                </div>
            </Formulario>
        </main>
    )
}*/
export default Form;