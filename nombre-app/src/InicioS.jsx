function InicioS({ handleSubmit }) {
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                
                <input 
                    type="email" 
                    placeholder="Correo"
                    required
                />

                <input 
                    type="password" 
                    placeholder="Contraseña"
                    required
                />

                <button type="submit">
                    Entrar
                </button>

            </form>
        </div>
    );
}

export default InicioS;