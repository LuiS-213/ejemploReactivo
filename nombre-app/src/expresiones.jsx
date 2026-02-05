import './tarhet.css'
import Hollow from './assets/hollow.webp'
import Halo from './assets/halo.webp'
import Arto from './assets/arto.webp'

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

function Inicio(){
    return(
    <>
    <Uno name='Halo'  descripcion='Juego que trata de derribar al Covenant'/>
    <Dos name='Hollow Knigth' descripcion='Debes unirte al vacio para derrotar al destello'/>
    <Tres name='Dark Souls' descripcion='Eres el elegiod, eres el alma oscura'/>
    </>
    )
  }

function AcercaDe(){
    return <h2>Acerca de nosotros</h2>
}
function Productos(){
    return <h2>Nuestros productos</h2>
}
function Contactos(){
    return <h2>Contactate con nosotros</h2>
}
function Sucursales(){
    return <h2>Visita nuestras sucursales</h2>
}




function Uno(props){
    return(
        <div className="tarjetas">
        <img src={Halo} alt="" />
        <h2>{props.name}</h2>
        <h3>{props.descripcion}</h3>
        </div>
    )
}
function Dos(props){
    return(
        <div className="tarjetas">
        <img src={Hollow} alt="" />
        <h2>{props.name}</h2>
        <h3>{props.descripcion}</h3>
        </div>
    )
}
function Tres(props){
    return(
        <div className="tarjetas">
        <img src={Arto} alt="" />
        <h2>{props.name}</h2>
        <h3>{props.descripcion}</h3>
        </div>
    )
}

export default Expresiones