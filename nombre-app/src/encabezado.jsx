import  logo from './assets/logo.png' 
function Encabezado(){
    return (
        <div>
            <Logotipo/>
            <Menu/>
            <Redes/>
        </div>
    )
}
function Logotipo(){
    return(
        <div>
            <img src={logo} alt="" />
        </div>
    )
}

function Menu (){
    return (
        <div>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div>
            <ul>
                <li>Facebook</li>
                <li>Whatsapp</li>
                <li>Intagram</li>
                <li>Youtube</li>
            </ul>
        </div>
    )
}

export default Encabezado