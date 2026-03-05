import PropTypes from 'prop-types'
import './encabezado.css'
import  yutu from './assets/yutu.webp' 
import  wats from './assets/wats.webp' 
import  insta from './assets/insta.webp' 
import  face from './assets/face.webp' 
import  logo from './assets/logo.png' 
import Clima from './clima'
import { useAuth } from './AuthContext'

function Encabezado({cambiarVista}){
    
    return (
        <div className='encabezado'>
            <Logotipo/>
            <Menu cambiarVista={cambiarVista}/>
            <Redes/>
        </div>
    )
}
function Logotipo(){
    return(
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
    )
}

function Menu ({cambiarVista}){
    const {isLoggedIn} = useAuth();
    return (
        <div className='Menu'>
            <ul>
                <li onClick={()=>cambiarVista("Inicio")}>Inicio</li>
                <li onClick={()=>cambiarVista("Productos")}>Productos</li>
                <li onClick={()=>cambiarVista("Contactos")}>Contactos</li>
                <li onClick={()=>cambiarVista("Sucursales")}>Sucursales</li>

                {isLoggedIn ? (
                    <>
                <li onClick={()=>cambiarVista("Carrito")}>Carrito</li>
                <li onClick={()=>cambiarVista("Usuarios")}>Usuarios</li>
                    </>
                ):(

                <li onClick={()=>cambiarVista("InicioS")}>Inicio Sesion</li>
                )}
            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div className='Redes'>
            <ul>
                <img src={face} alt="" />
                <img src={wats} alt="" />
                <img src={insta} alt="" />
                <img src={yutu} alt="" />
            </ul>
            <Clima/>
        </div>
    )
}
Menu.propTypes={
    cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes={
    cambiarVista: PropTypes.func.isRequired
};
export default Encabezado