// import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoBus.jpg";
import '../../assets/styles/FormLogin.css'

function FormLogin() {
    const navigate = useNavigate();
    
    const handlerClick = (e)=>{
        e.preventDefault();
        navigate("/registerbus")
        // const newForm = new FormData(form.current)
        // let newName = newForm.get('name')
        // alert(`Nombre: ${newForm.get('name')} \nUsername: ${newForm.get('username')}`)
    }

    return ( 
        <div className="box">
            <div className="form">
                <img src={Logo} alt="Logo de la empresa" className="logo" />
                <form>
                    <h2>Inicio de Sesión</h2>
                    <div className="input_box">
                        <input type="text" required/>
                        <label htmlFor="">Username</label>
                        <i></i>
                    </div>
                    <div className="input_box">
                        <input type="password" required/>
                        <label htmlFor="">Password</label>
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