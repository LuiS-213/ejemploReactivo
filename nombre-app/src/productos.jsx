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
    if (loading) return <p>Cargando.....</p>

     return(
        <div>
            <main className='Main'>
                <header>
                    <h1>Productos</h1>
                </header>
            <div className='cuadro'>
                <Registro/>
                {productos.map((producto)=>(
                    <article key={producto.id}>
                        <div className='tarjetas'>
                            <h2>{producto.title}</h2>
                            <img src={producto.image} alt="" />
                            <h3>${producto.price}</h3>
                        </div>
                    </article>
                ))}
            </div>
            </main>
        </div>
     )
}

export default Productos
