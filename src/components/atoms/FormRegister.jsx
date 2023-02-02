// import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import Logo from "../../assets/img/LogoBus.jpg";
import '../../assets/styles/FormRegister.css'

function FormRegister() {
    const navigate = useNavigate();

    const handlerClick = (e)=>{
        e.preventDefault();
        navigate("/registerbus")
    }

    return ( 
        <div className='box_reg'>
            <div className="form_reg">
                <img src={Logo} alt="Logo de la empresa" className="logo" />
                <form>
                    <h2>Registro de Usuario</h2>
                    <div className="input_box">
                        <input type="text" required id="name" name="name" />
                        <label htmlFor="name">Nombre</label>
                        <i></i>
                    </div>
                    <div className="input_box">
                        <input type="text" required id="name" name="name" />
                        <label htmlFor="name">E-mail</label>
                        <i></i>
                    </div>

                    <div className="input_box">
                        <input type="text" required id='usuario' name="username"/>
                        <label htmlFor="usuario">Usuario</label>
                        <i></i>
                    </div>

                    <div className="input_box">
                        <input type="password" required id='contrasenia'/>
                        <label htmlFor="contrasenia">Password</label>
                        <i></i>
                    </div>

                    <input type="button" value='Registrarse' onClick={handlerClick} />
                </form>
            </div>
            
        </div>
        
     );
}

export default FormRegister;