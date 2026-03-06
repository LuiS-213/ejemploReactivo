import { useState } from "react";
import { useAuth } from "./AuthContext"
import api from "./services/api";
import axios from "axios";

const Login =({cheVista})=>{
    const{login}=useAuth();

    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const credenciales ={username, password};
        try{
            const respuesta=await api.post('/auth/login/', credenciales);
            if(respuesta.data.token){
                console.log(respuesta.data.token);
                alert('Autenticacion Autorizada');
            }else{
                alert('Credenciales invalidas');    
            }
        }catch(error){
            alert('Error:',error);
            console.error("Error:",error);
        }
    };
}

export default Login;