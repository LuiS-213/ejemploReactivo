import { useEffect, useState } from "react";
import api from "./services/api";
import "./carrito.css";

function Carrito() {
    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerDatos = async () => {
        try {
            const response = await api.get("/detalles");
            setDetalles(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerDatos();
    }, []);

    const eliminar = async (id) => {
        try {
            await api.delete(`/detalle/${id}`);
            setDetalles((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p className="loading">Cargando...</p>;

    return (
        <main className="carrito-container">

            <h1 className="titulo-carrito">Mi Carrito</h1>

            {detalles.length === 0 ? (
                <p className="empty">Tu carrito está vacío</p>
            ) : (
                <div className="carrito-grid">

                    {detalles.map((item) => (
                        <div key={item.id} className="cart-card">

                            <h2>{item.producto?.nombre}</h2>

                            <p>
                                Cantidad: <span>{item.cantidad}</span>
                            </p>

                            <p>
                                Precio unitario: $ {item.precio_unitario}
                            </p>

                            <p className="total">
                                Total: $ {item.cantidad * item.precio_unitario}
                            </p>

                            <button
                                className="btn-eliminar"
                                onClick={() => eliminar(item.id)}
                            >
                                Quitar
                            </button>

                        </div>
                    ))}

                </div>
            )}

        </main>
    );
}

export default Carrito;