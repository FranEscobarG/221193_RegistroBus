import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoBus.jpg";
import '../../assets/styles/FormLogin.css'

function FormLogin() {
    const navigate = useNavigate();

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/iniciar';
    
    const handlerClick = (e)=>{
        e.preventDefault();
        const loginForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: loginForm.get('usuario'),
                contrasenia: loginForm.get('contrasenia')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            if(data.status === false){
                alert(JSON.stringify(data.message));
            }
            else{
                navigate("/registerbus");
            }
        });
    }

    return ( 
        <div className="box">
            <div className="form">
                <img src={Logo} alt="Logo de la empresa" className="logo" />

                <form ref={form}>
                    <h2>Inicio de Sesión</h2>
                    <div className="input_box">
                        <input type="text" id='user' name="usuario" required/>
                        <label htmlFor="user">Usuario</label>
                        <i></i>
                    </div>
                    <div className="input_box">
                        <input type="password" id='password' name='contrasenia' required/>
                        <label htmlFor="password">Contraseña</label>
                        <i></i>
                    </div>
                    <Link className="link" to="/register">Regístrate aquí</Link>
                    <input type='button' value='Iniciar sesión' onClick={handlerClick}/>
                    
                </form>
            </div> 
        </div>
    );
}

export default FormLogin;