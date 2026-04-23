import './products.css';
import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import api from './services/api';
import Registro from './registrarP';

function Productos() {

    const { user } = useAuth();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductos = async () => {
        try {

            const response = await api.get('/productos');
            setProductos(response.data);

        } catch (error) {
            console.error("Error al obtener productos:", error);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    const removeProducto = async (productoId) => {

        if (user?.rol !== 'admin') return;

        if (!window.confirm("¿Eliminar producto?")) return;

        try {

            await api.delete(`/producto/${productoId}`);
            alert("Producto eliminado");
            obtenerProductos();

        } catch (error) {
            alert("Error al eliminar");
            console.error(error);
        }
    };

    const agregarCarrito = async (producto) => {

    try {

        // crear carrito
        const carrito = await api.post('/carritos', {
            id_usuario: user.id,
            fecha_creacion: new Date()
        });

        // agregar detalle
        await api.post('/detalles', {
            id_carrito: carrito.data.id,
            id_producto: producto.id,
            cantidad: 1,
            precio_unitario: producto.precio
        });

        alert('Producto agregado al carrito');

    } catch (error) {
        console.error(error);
        alert('Error al agregar');
    }
};

    if (loading) return <p>Cargando...</p>;

    return (
        <div className='dos'>

            <main className='Main'>

                <header>
                    <h1>Productos</h1>
                </header>

                {/* SOLO ADMIN VE FORMULARIO */}
                {user?.rol === 'admin' && (
                    <Registro
                        productoE={productoSeleccionado}
                        limpiarSeleccion={() => setProductoSeleccionado(null)}
                        onActualizacion={obtenerProductos}
                    />
                )}

                <div className='cuadro'>

                    {productos.map((producto) => (
                        <article key={producto.id}>

                            <div className='tarjetas'>

                                <h2>{producto.nombre}</h2>

                                <p>{producto.descripcion}</p>

                                <h3>$ {producto.precio}</h3>

                                <p>Stock: {producto.stock}</p>

                                {/* CLIENTE */}
                                {user?.rol === 'cliente' && (
                                    <button
                                        onClick={() => agregarCarrito(producto)}
                                    >
                                        AGREGAR AL CARRITO
                                    </button>
                                )}

                                {/* ADMIN */}
                                {user?.rol === 'admin' && (
                                    <>
                                        <button
                                            onClick={() => setProductoSeleccionado(producto)}
                                            style={{
                                                backgroundColor: '#ffc107',
                                                marginBottom: '5px'
                                            }}
                                        >
                                            EDITAR
                                        </button>

                                        <button
                                            onClick={() => removeProducto(producto.id)}
                                        >
                                            ELIMINAR
                                        </button>
                                    </>
                                )}

                            </div>

                        </article>
                    ))}

                </div>

            </main>

        </div>
    );
}

export default Productos;