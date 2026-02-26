import React, {useState} from "react";
import axios from "axios";
import api from "./services/api";
import './regis.css'

function RegistroU(){
    const[id,setId]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const nuevoUsuario={id,username, email, password};
        try{
            const respuesta= await api.post('./users', nuevoUsuario);
            console.log('usuario registrado:', respuesta.data);
            alert('Usuario guardado')
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