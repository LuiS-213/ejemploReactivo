import './inicio.css'
import gow from './assets/gow.webp'
import sword from './assets/sword.webp'
import spider from './assets/spider.webp'
function Inicio(){
    return(
        <div className='Inicio'>
            <Text/>
            <Vertical/>
            <Horizontal/>
        </div>
    )
}

function Text(){
    return(
        <div className='Text'>
            <h3>
            Bienvenido al mundo de los videojuegos, descubre nuevos mundos
            </h3>
        </div>
    )
}
function Vertical(){
    return(
        <div className='Vertical'>
            <img src={gow} alt="" />
        </div>
    )
}

function Horizontal(){
    return(
        <div className='Horizontal'>
            <img src={spider} alt="" />
            <img src={sword} alt="" />
        </div>
    )
}

export default Inicio