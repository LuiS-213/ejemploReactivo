import { useState } from "react";
import './login.css';

const InicioS = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await res.json();

            if (data.token) {
                localStorage.setItem('token', data.token);
                alert('Login correcto');
            } else {
                alert('Credenciales incorrectas');
            }

        } catch (error) {
            console.log(error);
            alert('Error en el servidor');
        }
    };

    return (
        <div className="login-wrapper">

            <form className="login-form" onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="ejemplo@correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Entrar
                </button>

            </form>

        </div>
    );
};

export default InicioS;