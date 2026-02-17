import { useEffect, useState } from "react";
import './clima.css'
import termo from './assets/termo.png'
function Clima(){
    const[clima,setClima]= useState(null);
    const API_KEY=import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat=20.239906929543082; 
    const lng=-97.95501940696691;

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res)=>res.json())
        .then((data)=>{
            setClima(data)
})
.catch((error)=>console.log("Error:",error));
    },[])
    return(
        <div className="divClima">
            {
                clima ? (
                    <>
                    <p>{clima.name}</p>
                    <p>Temp:{clima.main.temp}</p>
                    <p>Hum:{clima.main.humidity}</p>
                    <img src={termo} alt="" />
                    </>
                ):(
                    <p>Cargar clima...</p>
                )
            }
        </div>
    )
    }

export default Clima;