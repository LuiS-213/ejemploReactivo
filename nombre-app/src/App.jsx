import './App.css'
import Encabezado from "./encabezado";
import Expresiones from "./expresiones";
import Text from './text';
import Footer from './footer';
import { useState } from 'react';

function App(){
  const[vista, setVista]= useState("Inicio")
  return(
    <div>
    <Encabezado cambiarVista={setVista}/>
    <Expresiones vista={vista}/>
    <Text name='Luis'/>
    <Footer/>
    </div>
  )
}

export default App