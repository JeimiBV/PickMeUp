import React, { useEffect } from "react";
import Modals from "./Modals";
import "../estilos/formulario.css"
import { useState } from 'react'



function Form() {

    const [nombre, setNombre] = useState({ valor: '', estado: false })
    const [descripcion, setDescripcion] = useState({ valor: '', estado: false })
    const [producto, setProducto] = useState({ valor: '', estado: false })
    const [archivo, setArchivo] = useState({ valor: '', estado: false })
    const [visible, setVisible] = useState(false)



    const validacion = () => {

        if ((nombre.valor.length >= 2 && nombre.valor.length <= 30) && (descripcion.valor.length >= 10 && descripcion.valor.length <= 100)) {
            setNombre((prevState) => ({ ...prevState, estado: false }))
            setDescripcion((prevState) => ({ ...prevState, estado: false }))
            setVisible(true);
        }
        else {
            setNombre(prevState => ({ ...prevState, estado: true }))
            setDescripcion(prevState => ({ ...prevState, estado: true }))
        }

    }


    return <div className="contenedor">


        <div className="elementos-form">
            <label className="label">
                Nombre del producto
            </label>
            <input className="entrada" placeholder="Ingrese el nombre" onChange={ev => (setNombre(prevState => ({ ...prevState, valor: ev.target.value })))}></input>
            <h3 className={nombre.estado ? "validacion" : "invisible"} >
                El nombre debe contener de 2 a 30 caracteres
            </h3>
            <label className="label">
                Descripción del producto
            </label>
            <input className="entrada" placeholder="Ingrese la descripción" onChange={ev => (setDescripcion(prevState => ({ ...prevState, valor: ev.target.value })))}></input>
            <h3 className={descripcion.estado ? "validacion" : "invisible"}>
                La descripción debe contener de 10 a 100 caracteres
            </h3>

            <label className="label">
                Tipo de producto
            </label>
            <select className="drop" placeholder="Seleccione el tipo">
                <option defaultValue={"seleccione el tipo"}>Seleccione el tipo</option>
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
            <h3 className={producto.estado ? "validacion" : "invisible"}>
                Se debe seleccionar una opción
            </h3>
            <label className="label">
                Insertar imagen
            </label>
            <input type="file" className="botonA" />

            <button className="botonR" onClick={validacion}>
                Registrar
            </button>



        </div>
        <Modals
            estado={visible}
            cambiarEstado={setVisible}
        >
            <div className="modals">
                <h2>
                    Registro de producto
                </h2>
                <h3 className="texto-confirmacion">¿Está seguro de registrar el producto?</h3>
                <div className="botones">
                    <button className="left">Si</button>
                    <button className="right">No</button>
                </div>
            </div>
        </Modals>
    </div>
    
}
export default Form;