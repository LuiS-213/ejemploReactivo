import './App.css'
import Encabezado from "./encabezado";
import Expresiones from "./expresiones";
import Text from './text';
import Footer from './footer';
import { useState } from 'react';
// 1. Importa el proveedor (asegúrate de que la ruta sea la correcta)
import { AuthProvider } from './AuthContext'; 

function App(){
  const [vista, setVista] = useState("Inicio")

  return (
    // 2. Envuelve TODO con AuthProvider
    <AuthProvider>
      <div>
        <Encabezado cambiarVista={setVista}/>
        <Expresiones vista={vista}/>
        <Text name='Luis'/>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App