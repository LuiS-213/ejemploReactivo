import './tarhet.css'
import Hollow from './assets/hollow.webp'
import Halo from './assets/halo.webp'
import Arto from './assets/arto.webp'
function Productos(){
    return(
    <>
    <Uno name='Halo'  descripcion='Juego que trata de derribar al Covenant'/>
    <Dos name='Hollow Knigth' descripcion='Debes unirte al vacio para derrotar al destello'/>
    <Tres name='Dark Souls' descripcion='Eres el elegiod, eres el alma oscura'/>
    </>
    )
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

export default Productos