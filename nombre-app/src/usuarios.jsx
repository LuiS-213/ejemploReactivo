import { useEffect, useState } from 'react';
import api from './services/api'
import edit from './assets/edit.png'
import add from './assets/image.png'
import delet from './assets/delete.png'
import './usuarios.css'
import RegistroU from './registrarU';

function Usuarios(){
 const[usuarios, setUsuarios]=useState([]);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        const obtenerUsuarios=async ()=>{
            try{
                const response=await api.get("/users");
                setUsuarios(response.data);
            } catch (error){
                console.error("Erroro al obtener usuarios:", error);
            } finally{
                setLoading(false);
            }
        };
        obtenerUsuarios();
    }, []);

    const removeUsuario = async (usuarioId) => {
  try {
    const response = await api.delete(`/users/${usuarioId}`);
    alert("Usuario eliminado correctamente ");
    console.log(response.data);

    return true;

  } catch (error) {
    alert("Error al eliminar usuario ");
    console.error(error);
    return false;
  }
};
    
if (loading) return <p>Cargando.....</p>
    return(
        
        <div className='main'>
        <RegistroU/>
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

                {/* Botones con imágenes */}
                <td>
                    <img 
                        src={add}
                        alt="Añadir" 
                        className="icono"
                        onClick={() => handleAdd(usuario.id)}
                    />
                </td>

                <td>
                    <img 
                        src={edit}
                        alt="Editar" 
                        className="icono"
                        onClick={() => handleEdit(usuario.id)}
                    />
                </td>

                <td>
                    <button onClick={()=> removeUsuario(usuario.id)}>Eliminar</button>
                    
                </td>
            </tr>
        ))}
    </tbody>
</table>
        </div>
 
)

}


export default Usuarios