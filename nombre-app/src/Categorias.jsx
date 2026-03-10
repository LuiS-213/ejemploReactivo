import { useEffect, useState } from "react";
import mealApi from "./services/api2";
function Categorias(){
    const[categorias, setCategorias]= useState([]);
    const[loading, setLoading]= useState([true]);
    
    const obtenerCategoria= async ()=>{
        try{
            const response = await mealApi.get("/categories.php");
            setCategorias(response.data.categories);
        }catch(error){
            console.error(error);
        } finally{
            setLoading(false);
        }
    };

useEffect(()=>{
    obtenerCategoria();
},[]);

if (loading) return <p>Cargando.....</p>

return(
    <div>
        <main className="Main">
            <header>
                <h2>CATEGORIAS</h2>
            </header>
            <div className="Tarjet">
                {categorias.map((categoria)=>(
                    <article key={categoria.idCategory}>
                        <h2>{categoria.idCategory}</h2>
                        <h2>{categoria.strCategory}</h2>
                        <img src={categoria.strCategoryThumb} alt="" />
                        <p>{categoria.strCategoryDescription}</p>
                    </article>
                ))}
            </div>
        </main>
    </div>
);
}

export default Categorias;