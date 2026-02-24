import { useEffect, useState } from 'react';
import api from './services/api'
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
if (loading) return <p>Cargando.....</p>
    return(
        <div>
            <main className='Main'>
                <header>
                    <h1>Usuarios</h1>
                </header>
            <div className='cuadro'>
                {usuarios.map((usuario)=>(
                    <article key={usuario.id}>
                        <div className='tarjetas'>
                            <h2>{usuario.username}</h2>
                             <h3>{usuario.email}</h3>
                            <h3>{usuario.password}</h3>
                        </div>
                    </article>
                ))}
            </div>
            </main>
        </div>
     )
}

export default Usuarios