import './tarhet.css'
import Hollow from './assets/hollow.webp'
import Halo from './assets/halo.webp'
import Arto from './assets/arto.webp'

function Expresiones(){
    return(
        <div className="cuadro">
        <Uno/>
        <Dos/>
        <Tres/>
        </div>
    )
}
function Uno(){
    return(
        <div className="tarjetas">
        <img src={Halo} alt="" />
        <h2>Halo Infinity</h2>
        </div>
    )
}
function Dos(){
    return(
        <div className="tarjetas">
        <img src={Hollow} alt="" />
        <h2>Hollow Knigth</h2>
        </div>
    )
}
function Tres(){
    return(
        <div className="tarjetas">
        <img src={Arto} alt="" />
        <h2>Dark Souls</h2>
        </div>
    )
}

export default Expresiones