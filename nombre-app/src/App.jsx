import './App.css'
import Encabezado from "./encabezado";
import Expresiones from "./expresiones";
import Text from './text';
import Footer from './footer';

function App(){
  return(
    <div>
    <Encabezado/>
    <Expresiones/>
    <Text name='Luis'/>
    <Footer/>
    </div>
  )
}

export default App