 import { useEffect, useState } from "react"
 import api from "./services/api"
 import './carrito.css'
 import RegistroC from "./registrarC";
 
 function Carrito(){
    const[carts,setCarts]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const obtenerCarts=async ()=>{
            try{
                const response= await api.get("/carts");
                setCarts(response.data);
            }catch(error){
                console.error("Error al obtener cart:",error);
            }finally{
                setLoading(false);
            }

        };
        obtenerCarts();
    },[]);
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




    if (loading) return <p>Cargando....</p>
    return(
        <div>
            <main className="Main">
                <header>
                    <h1>Carrito</h1>
                </header>
                <RegistroC/>
                <div className="carts">
                    {carts.map((cart)=>(
                        <article key={cart.id}>
                                <h2>Pedido No:{cart.id}</h2>
                                <h2>Usuario:{cart.userId}</h2>
                                <h2>Fecha: {cart.date}</h2>
                                <div className="cosas">
                               
                                {cart.products.map((producto)=>(
                                    <article >
                                        <h2>Producto:{producto.productId}</h2>
                                        <h2>Cantidad:{producto.quantity}</h2>
                                        <button onClick={()=>removeProducto(producto.id)}>Eliminar</button>                                        
                                    </article>
                                ))}
                                
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    )
 }
 export default Carrito