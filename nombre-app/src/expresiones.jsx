
import './tarhet.css'
import Productos from './productos'
import Inicio from './inicio'
import Contactos from './Contactos'

function Expresiones({vista}){
    const vistas={
        Inicio:<Inicio/>,
        AcercaDe:<AcercaDe/>,
        Productos:<Productos/>,
        Contactos:<Contactos/>,
        Sucursales:<Sucursales/>
    }
    return(
        <div className="cuadro">
            {vistas[vista] || <Inicio/>}
        </div>
    )
}


function AcercaDe(){
    return (
        <div>
            <h2>Acerca de nosotro</h2>
         </div>
    )
}

function Sucursales(){
    return <h2>Visita nuestras sucursales</h2>
}

export default Expresiones

//*esto va dentro del inmcio o letras  antes del return
//const position ={lat:19.4326, lng:-99.1332};