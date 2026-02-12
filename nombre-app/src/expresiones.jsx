
import './tarhet.css'
import Productos from './productos'
import Inicio from './inicio'

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
    return <h2>Acerca de nosotros</h2>
}

function Contactos(){
    return <h2>Contactate con nosotros</h2>
}
function Sucursales(){
    return <h2>Visita nuestras sucursales</h2>
}

export default Expresiones

//*esto va dentro del inmcio o letras  antes del return
//const position ={lat:19.4326, lng:-99.1332};