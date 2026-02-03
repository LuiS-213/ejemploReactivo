import './texto.css'
function Text(props){
    let user=props
    console.info(user)
    if(user.name!=""){

    return(
    <div className='texto'>
        <h3>La mejor biblioteca de videojuegos
        </h3>
    </div>
    )
}
return(
    <div><h3>No hay datos</h3></div>
 )
}
export default Text