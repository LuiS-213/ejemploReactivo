import Mapa from './mapa'
import './texto.css'
function Text(props){
    return(
    <div className='texto'>
        <h3>La mejor biblioteca de videojuegos
        </h3>
           <Mapa
            lat={20.23995}
            lng={-97.95375}
            nombre={"Hola"}/>
    </div>
    )
}
export default Text