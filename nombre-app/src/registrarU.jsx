import React, {useState, useEffect} from "react";
import axios from "axios";
import api from "./services/api";
import './regis.css'

function RegistroU(usuarioE, limpiarSeleccion, onActualizacion){
    const[id,setId]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    useEffect(()=>{
        if (usuarioE){
            setUsername(usuarioE,username);
            setEmail(usuarioE,email)
            setPassword('');
        }else{
            resteForm();
        }
    },[usuarioE]);

    const resteForm=()=>{
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const nuevoUsuario={id,username, email, password};
        try{
            if(usuarioE){
            const respuesta= await api.put(`/users/ ${usuarioE.id}`, nuevoUsuario);
            console.log('usuario actualizado:', respuesta.data);
            alert('Usuario actualizado');
            limpiarSeleccion();
            }else{
                const respuesta= await api.post('/users/',nuevoUsuario);
                console.log('Uusuario Registrado', respuesta.data);
                alert('Usuario guardado con exito')
            }
            resteForm();
            if (onActualizacion) onActualizacion();
        } catch(error){
            console.error('Error de Registro:', error)
        }
    }

    return(
        <div className="main">
            <h2>Registrar Usuario</h2>
            <form  className='form' onSubmit={handleSubmit}>
                <input 
                type="number" 
                placeholder="Id" 
                value={id} 
                onChange={(e)=> setId(e.target.value)} 
                />

                <input 
                type="text" 
                placeholder="User Name" 
                value={username} 
                onChange={(e)=> setUsername(e.target.value)} 
                />

                <input 
                type="text" 
                placeholder="Email" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                />

                <input 
                type="text" 
                placeholder="Password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} 
                />

                <button type="submit">Registrar</button>

            </form>
        </div>
    )

}
export default RegistroU