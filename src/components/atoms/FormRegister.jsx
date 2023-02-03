import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import Logo from "../../assets/img/LogoBus.jpg";
import '../../assets/styles/FormRegister.css'

function FormRegister() {
    const navigate = useNavigate();

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario';

    const handlerClick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data.message));
            navigate("/");
        });
    }

    return ( 
        <div className='box_reg'>
            <div className="form_reg">
                <img src={Logo} alt="Logo de la empresa" className="logo" />

                <form ref={form}>
                    <h2>Registro de Usuario</h2>
                    <div className="input_box">
                        <input type="text" required id="name" name="nombre" />
                        <label htmlFor="name">Nombre</label>
                        <i></i>
                    </div>
                    <div className="input_box">
                        <input type="text" required id="e-mail" name="correo" />
                        <label htmlFor="e-mail">Correo</label>
                        <i></i>
                    </div>

                    <div className="input_box">
                        <input type="text" required id='usuario' name="usuario"/>
                        <label htmlFor="usuario">Usuario</label>
                        <i></i>
                    </div>

                    <div className="input_box">
                        <input type="password" required id='password' name='contrasenia'/>
                        <label htmlFor="password">Contraseña</label>
                        <i></i>
                    </div>

                    <input type="button" value='Registrarse' onClick={handlerClick} />
                </form>
            </div>
            
        </div>
        
     );
}

export default FormRegister;