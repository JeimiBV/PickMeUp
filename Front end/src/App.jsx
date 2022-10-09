import './App.css'
import Cabecera from './componentes/Cabecera'
import Menu from './componentes/Menu'
import Form from './componentes/Formulario'
import { useState } from 'react'
function App() {

  const [valido, setValido] = useState( [{estado1: false}, {estado2: false},{estado3: false}, {estado4: false}]);


  return (
    <div className="App">
      <Cabecera />

      <div className='contenedor-form'>
        <Menu />
        <Form
          estado1={valido[0].estado1}
          estado2={valido[1].estado2}
          estado3={valido[2].estado3}
          estado4={valido[3].estado4}
        />
      </div>
    </div>
  )
}

export default App
