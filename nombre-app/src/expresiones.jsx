import './tarhet.css'
import logo from './assets/logo.webp'
function Expresiones(){
    return(
        <div className="Tarjetas">
            <Uno/>
            <Dos/>
            <Tres/>    
        </div>
    )
}

function Uno(){
    return(
        <div className="info">
            <img src={logo} alt="" />
            <h2>aaaaaaaaaaaaaaaaaaaaaaaaa</h2>
        </div>
    )

}
function Dos(){
    return(
        <div className="info">
            <img src={logo} alt="" />
            <h2>aaaaaaaaaaaaaaa</h2>
        </div>
    )

}
function Tres(){
    return(
        <div className="info">
            <img src={logo} alt="" />
            <h2>aaaaaaaaaaaaaaa</h2>
        </div>
    )

}
export default Expresiones