import './App.css'
import Cabecera from './componentes/Cabecera'
import Menu from './componentes/Menu'
import Form from './componentes/Formulario'
import { useState } from 'react'
function App() {

  //const [valido, setValido] = useState( {estado1: false, estado2: false, estado3: false, estado4: false});


  return (
    <div className="App">
      <Cabecera />

      <div className='contenedor-form'>
        <Menu />
        <Form
        /*  estado1={valido.estado1}
          estado2={valido.estado2}
          estado3={valido.estado3}
          estado4={valido.estado4}
        *//>
      </div>
    </div>
  )
}

export default App
