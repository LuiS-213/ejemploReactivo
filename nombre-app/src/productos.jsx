import './tarhet.css'
import { useEffect, useState } from 'react';
import api from './services/api'
import Registro from './registrarP';


function Productos(){
    const[productos, setProductos]=useState([]);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        const obtenerProductos=async ()=>{
            try{
                const response=await api.get("/products");
                setProductos(response.data);
            } catch (error){
                console.error("Erroro al obtener productos:", error);
            } finally{
                setLoading(false);
            }
        };
        obtenerProductos();
    }, []);

    const removeProducto = async (productoId) => {
  try {
    const response = await api.delete(`/users/${productoId}`);
    alert("Producto eliminado correctamente ");
    console.log(response.data);

    return true;

  } catch (error) {
    alert("Error al eliminar producto ");
    console.error(error);
    return false;
  }
};

    if (loading) return <p>Cargando.....</p>

     return(
        <div className='dos'>
            <main className='Main'>
                <header>
                    <h1>Productos</h1>
                </header>
                 <Registro/>
            <div className='cuadro'>
                {productos.map((producto)=>(
                    <article key={producto.id}>
                        <div className='tarjetas'>
                            <h2>{producto.title}</h2>
                            <img src={producto.image} alt="" />
                            <h3>${producto.price}</h3>
                            <button onClick={()=>removeProducto(producto.id)}>ELIMINAR</button>
                        </div>
                    </article>
                ))}
            </div>
            </main>
        </div>
     )
}

export default Productos
