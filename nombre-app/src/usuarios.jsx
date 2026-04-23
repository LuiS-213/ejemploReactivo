import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import api from './services/api';

import edit from './assets/edit.png';
import add from './assets/image.png';
import delet from './assets/delete.png';

import './usuarios.css';
import RegistroU from './registrarU';

function Usuarios() {

    const { user } = useAuth();

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSeleccionado, setUsuarioS] = useState(null);

    const obtenerUsuarios = async () => {
        try {

            // ADMIN ve todos
            if (user?.rol === 'admin') {

                const response = await api.get('/usuarios');
                setUsuarios(response.data);

            } else {

                // CLIENTE solo se ve a sí mismo
                const response = await api.get(`/usuario/${user.id}`);
                setUsuarios([response.data]);
            }

        } catch (error) {
            console.error("Error al obtener usuarios:", error);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            obtenerUsuarios();
        }
    }, [user]);

    const removeUsuario = async (usuarioId) => {

        if (user?.rol !== 'admin') return;

        if (!window.confirm("¿Eliminar usuario?")) return;

        try {

            await api.delete(`/usuario/${usuarioId}`);
            alert("Usuario eliminado");
            obtenerUsuarios();

        } catch (error) {
            alert("Error al eliminar");
        }
    };

    if (loading) return <p>Cargando...</p>;

    return (
        <div className='main'>

            {/* SOLO ADMIN VE FORMULARIO */}
            {user?.rol === 'admin' && (
                <RegistroU
                    usuarioE={usuarioSeleccionado}
                    limpiarSeleccion={() => setUsuarioS(null)}
                    onActualizacion={obtenerUsuarios}
                />
            )}

            <table className="tabla-usuarios">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Rol</th>

                        {user?.rol === 'admin' && (
                            <>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </>
                        )}
                    </tr>
                </thead>

                <tbody>

                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>

                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.rol}</td>

                            {user?.rol === 'admin' && (
                                <>
                                    <td>
                                        <img
                                            src={edit}
                                            alt="Editar"
                                            className="icono"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setUsuarioS(usuario)}
                                        />
                                    </td>

                                    <td>
                                        <img
                                            src={delet}
                                            alt="Eliminar"
                                            className="icono"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => removeUsuario(usuario.id)}
                                        />
                                    </td>
                                </>
                            )}

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Usuarios;