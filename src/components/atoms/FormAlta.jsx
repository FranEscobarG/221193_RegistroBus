import { useRef } from 'react';
// import {useNavigate} from 'react-router-dom';
import Logo from "../../assets/img/LogoBus.jpg";
import '../../assets/styles/FormAlta.css'

function FormAlta() {
    // const navigate = useNavigate();
    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/autobus/register';

    const handlerClick = (e)=>{
        e.preventDefault();
        // const busForm = new FormData(form.current)
        
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         clave: busForm.get('clave'),
        //         placa: busForm.get('placa'),
        //         numasientos: busForm.get('numasientos'),
        //         fecha: busForm.get('fecha'),
        //         tipo: busForm.get('tipo'),
        //         nombre: busForm.get('nombre'),
        //         licencia: busForm.get('licencia')
        //     })
        // }
        
        // fetch(endpoint, options) 
        // .then(response => response.json())
        // .then(data => {
        //     alert(JSON.stringify(data.message));
        //     // navigate("/");
        // });
    }


    return ( 
        <div className="box-form_alta">
                <img src={Logo} alt="Logo de la empresa" className="logo" />
                <form ref={form}>
                    <h2>Alta de Autobuses</h2>
                    <div className="content-input_smallbox">
                        <div className="input_smallbox">
                            <label htmlFor="">Clave de autobus</label>
                            <input type="text" required name="clave"/>
                        </div>
                        <div className="input_smallbox">
                            <label htmlFor="">Placa de autobus</label>
                            <input type="text" required name="placa"/>
                        </div>
                    </div>
                    <div className="content-input_smallbox">
                        <div className="input_smallbox">
                            <label htmlFor="">No. de asientos</label>
                            <input type="number" required name="numasientos"/>
                        </div>
                        <div className="input_smallbox">
                            <label htmlFor="bus">Tipo</label>
                            <select id="bus" className="combobox" required name="tipo">
                                <option value="turismo">Turismo</option>
                                <option value="lujo">Lujo</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="fecha">Fecha de alta</label>
                        <input type="date" id="fecha" required name="fecha"/>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="">Nombre del chofer</label>
                        <input type="text" required  name="nombre"/>
                        <i></i>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="">No. de licencia</label>
                        <input type="text" required  name="licencia"/>
                        <i></i>
                    </div>
                    <input type='button' value='Registrar Autobus' onClick={handlerClick} className="button_alta" />
                    
                </form>
        </div> 
     );
}

export default FormAlta;