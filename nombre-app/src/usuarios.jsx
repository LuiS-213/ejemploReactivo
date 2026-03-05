import { useEffect, useState } from 'react';
import api from './services/api';
import edit from './assets/edit.png';
import add from './assets/image.png';
import delet from './assets/delete.png';
import './usuarios.css';
import RegistroU from './registrarU';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSeleccionado, setUsuarioS] = useState(null);

    const obtenerUsuarios = async () => {
        try {
            const response = await api.get("/users");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const removeUsuario = async (usuarioId) => {
        if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
        try {
            await api.delete(`/users/${usuarioId}`);
            alert("Usuario eliminado correctamente");
            obtenerUsuarios(); 
        } catch (error) {
            alert("Error al eliminar usuario");
        }
    };

    if (loading) return <p>Cargando.....</p>;

    return (
        <div className='main'>
            {/* Se pasan las props necesarias para que el formulario sepa si editar o crear */}
            <RegistroU 
                usuarioE={usuarioSeleccionado} 
                limpiarSeleccion={() => setUsuarioS(null)} 
                onActualizacion={obtenerUsuarios} 
            />
            
            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Añadir</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.password}</td>

                            {/* Botones con tus imágenes y clases originales */}
                            <td>
                                <img 
                                    src={add} 
                                    alt="Añadir" 
                                    className="icono" 
                                />
                            </td>

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;