import React, { useEffect } from "react";
//import {app} from "../fb"
import Modals from "./Modals";
import "../estilos/formulario.css"
import { useState } from 'react'



function Form() {
    

    const [nombre, setNombre] = useState({ valor: '', estado: false,check:false })
    const [descripcion, setDescripcion] = useState({ valor: '', estado: false, check:false })
    const [archivo, setArchivo] = useState({ valor: '', estado: false, check:false })
    const [modalConf, setModalConf] = useState(false)
    const [modalSi, setModalSi] = useState(false)
    const [modalNo, setModalNo] = useState(false)
    const [data, setData] = useState();
    const opciones = ["Alimentos enlatados", "Bebidas calientes", "Carnes y pescado", "Cereales", "Ensalada", "Frutas y verduras", "Lácteos y huevos", "Panadería y pastelería", "Postres", "Snacks"];
    const [producto, setProducto] = useState({ valor: 'seleccione el tipo', estado: false });
    
  /*  const archivoHandler= async(e)=>{
        const archivo = e.target.files[0]
        const storageRef = app.storage().ref()
        const archivoPath = storageRef.child(archivo.name)
        await archivoPath.put(archivo)
        console.log("archivo cargado: ", archivo.name)
    }*/
    const checkNombre= (ev)=>{
        setNombre(prevState => ({ ...prevState, valor: ev.target.value }))
        
        if(ev.target.value.length>=2 && ev.target.value.length<=10){
            setNombre(prevState => ({ ...prevState, check:true }))
           
        }
        else{
            setNombre(prevState => ({ ...prevState, check:false }))
        }

    }
    const checkDescripcion=(ev)=>{
        setDescripcion(prevState => ({ ...prevState, valor: ev.target.value }))
        if(ev.target.value.length>=10 && ev.target.value.length<=100){
            setDescripcion(prevState => ({ ...prevState, check:true }))
   
        }
        else{
            setDescripcion(prevState => ({ ...prevState, check:false }))
        }
    }
    const checkProducto =()=>{
        if ((producto.valor !== "seleccione el tipo")) {
                setProducto((prevState) => ({ ...prevState, check: true }))
        }
        else{
            setProducto(prevState => ({ ...prevState, check:false }))
        }
       
    }

    const validacion = () => {
        event.preventDefault()
        if ((nombre.valor.length >= 2 && nombre.valor.length <= 30) && (descripcion.valor.length >= 10 && descripcion.valor.length <= 100) && (producto.valor !== "seleccione el tipo")&& validacionEspacios(nombre.valor) && validacionEspacios(descripcion.valor)) {
            setNombre((prevState) => ({ ...prevState, estado: false }));
            setDescripcion((prevState) => ({ ...prevState, estado: false }));
            setProducto((prevState) => ({ ...prevState, estado: false }));
            setModalConf(true);
        } else {
            if ((nombre.valor.length >= 2 && nombre.valor.length <= 30) && validacionEspacios(nombre.valor)) {
                setNombre((prevState) => ({ ...prevState, estado: false }));
            } else {
                setNombre(prevState => ({ ...prevState, estado: true }))
            } if ((descripcion.valor.length >= 10 && descripcion.valor.length <= 100) && validacionEspacios(descripcion.valor)) {
                setDescripcion((prevState) => ({ ...prevState, estado: false }))
            } else {
                setDescripcion(prevState => ({ ...prevState, estado: true }))
            } if ((producto.valor !== "seleccione el tipo")) {
                setProducto((prevState) => ({ ...prevState, estado: false }))
            } else {
                setProducto((prevState) => ({ ...prevState, estado: true }))
            }
        }
        
    }

    const validacionEspacios = (parametro) => {
        var patron = /^\s+$/;
        if(patron.test(parametro)){
            return false;
        } else{
            return true;
        }
    }
    
    const mostrarSi = () => {
        setTimeout(() => {
            setModalNo(false)
            setModalSi(false)
        }, 3000);
        document.getElementById('Formul').reset();
        setModalConf(false);
        setModalSi(true);
        setNombre(prevState => ({ ...prevState, valor: '' }))
        setDescripcion(prevState => ({ ...prevState, valor: '' }));
        setProducto(prevState => ({ ...prevState, valor: 'seleccione el tipo' }));
    }

        
   
    const mostrarNo = () => {
        setTimeout(() => {
            setModalNo(false)
            setModalSi(false)
        }, 3000);
        setModalConf(false);
        setModalNo(true);
    }
   

    //http://localhost:5000/pruebafirebase-30018/us-central1/app/api/products

    return <div className="contenedor">


        <form action="" id= "Formul" onSubmit= {validacion} method="POST" className="elementos-form" >
        
            <label className="label">
                Nombre del producto
            <div className="icono">
            <input className="entrada" name="Nombre" placeholder="Ingrese el nombre" onChange={ev => checkNombre(ev) }></input>
            <i class={ nombre.check?"fa-regular fa-circle-check fa-2x":"transparent"}></i>
            </div>
            <h3 className={nombre.estado ? "validacion" : "invisible"} >
                El nombre debe contener de 2 a 30 caracteres
            </h3>
            </label>
            <label className="label">
                Descripción del producto
            <div className="icono">
            <input className="entrada" name="Descripcion" placeholder="Ingrese la descripción" onChange={ev => checkDescripcion(ev)}></input>
            <i class={ descripcion.check?"fa-regular fa-circle-check fa-2x":"transparent"}></i>
            </div>
            <h3 className={descripcion.estado ? "validacion" : "invisible"}>
                La descripción debe contener de 10 a 100 caracteres
            </h3>
            </label>

            <label className="label">
                Tipo de producto
            <div className="icono">
            <select className="drop" placeholder="Seleccione el tipo"
                defaultValue="seleccione el tipo"
                onClick={
                    checkProducto
                }
                onChange={
                    e => setProducto(prevState => ({ ...prevState, valor: e.target.value }))}>
                <option value="seleccione el tipo" disabled hidden>Seleccione el tipo</option>
                {opciones.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                ))}
            </select>
            <i class={producto.check ? "fa-regular fa-circle-check fa-2x" : "transparent"}></i>
            </div>
            <h3 className={producto.estado ? "validacion" : "invisible"}>
                Se debe seleccionar una opción
            </h3>
            </label>
            <label htmlFor="img" className="imagenes-label">
                Insertar imagen
            </label>

            <input id="img" type="file" className="botonA" accept="image/png, image/jpeg, image/jpg"  onChange={(e) => setData(e.target.files)} />


            <input type="submit" className="botonR" value='Registrar'>
            </input>
              
           

        </form>
        <Modals
            estado={modalConf}
            cambiarEstado={setModalConf}
        >
            <div className="modals">
                <h2>
                    Registro de producto
                </h2>
                <h3 className="texto-confirmacion">¿Está seguro de registrar el producto?</h3>
                <div className="botones">
                    <button className="left" onClick={mostrarSi}>Si</button>
                    <button className="right" onClick={mostrarNo}>No</button>
                </div>
            </div>
        </Modals>

        <Modals
            estado={modalSi}
            cambiarEstado={setModalSi}
        >
            <div className="modalSiNo">
                <h3 className="texto-confirmacion">Guardando registro ...</h3>
            </div>
        </Modals>

        <Modals
            estado={modalNo}
            cambiarEstado={setModalNo}
        >
            <div className="modalSiNo">
                <h3 className="texto-confirmacion">Cancelado</h3>
            </div>
        </Modals>


    </div>

}
export default Form;

/*
onChange ={ e => archivoHandler(e)}
en input de tipo files
*/