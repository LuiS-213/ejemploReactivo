import './sucursales.css'
import Mapa from "./mapa"
function Sucursales(){
    return (
        <div className='main'>
            <h2>Visita nuestras sucursales</h2>
             <Tarjetas/>
        </div>
    )
}
function Tarjetas(){
    return(
        <div className="div">
            <Sucursales1/>
             <Sucursales2/>
             <Sucursales3/>
        </div>
    )
}

function Sucursales1(){
    return(
        <div className="sucursal">
            <Mapa
            lat={20.23995}
            lng={-97.95375}
            nombre={"Sucursal del Centro"}/>
        </div>
    )
}

function Sucursales2(){
    return(
        <div className="sucursal">
            <Mapa
            lat={21.870611158237367 }
            lng={-102.93616567939236 }
            nombre={"Sucursal del Cerro"}/>
        </div>
    )
}

function Sucursales3(){
    return(
        <div className="sucursal">
            <Mapa
            lat={24.483454903272428 }
            lng={-105.54092239290239}
            nombre={"Sucursal del la Ciudad"}/>
        </div>
    )
}

export default Sucursales