
import './tarhet.css'
import Productos from './productos'
import Inicio from './inicio'
import Contactos from './Contactos'
import Sucursales from './sucursales'
import Usuarios from './usuarios'
import Carrito from './carrito'
import InicioS from './InicioS'

function Expresiones({vista, chVista}){
    const vistas={
        Inicio:<Inicio/>,
        Usuarios:<Usuarios/>,
        Productos:<Productos/>,
        Contactos:<Contactos/>,
        Sucursales:<Sucursales/>,
        Carrito:<Carrito/>,
        InicioS:<InicioS chVista={chVista}/>
    }
    return(
        <div className="cuadro">
            {vistas[vista] || <Inicio/>}
        </div>
    )
}




export default Expresiones

//*esto va dentro del inmcio o letras  antes del return
//const position ={lat:19.4326, lng:-99.1332};