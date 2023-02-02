import { Link } from "react-router-dom";
import Logo from "../../assets/img/LogoBus.jpg";
import '../../assets/styles/FormAlta.css'

function FormAlta() {
    const handlerClick = (e)=>{
        e.preventDefault();
        navigate("/login")
    }


    return ( 
        <div className="box-form_alta">
                <img src={Logo} alt="Logo de la empresa" className="logo" />
                <form>
                    <h2>Alta de Autobuses</h2>
                    <div className="content-input_smallbox">
                        <div className="input_smallbox">
                            <label htmlFor="">Clave de autobus</label>
                            <input type="text" required/>
                            {/* <i></i> */}
                        </div>
                        <div className="input_smallbox">
                            <label htmlFor="">Placa de autobus</label>
                            <input type="text" required/>
                            {/* <i></i> */}
                        </div>
                    </div>
                    <div className="content-input_smallbox">
                        <div className="input_smallbox">
                            <label htmlFor="">No. de asientos</label>
                            <input type="number" required/>
                        </div>
                        <div className="input_smallbox">
                            <label htmlFor="bus">Tipo</label>
                            <select id="bus" name="bus" className="combobox" required>
                                <option value="turismo">Turismo</option>
                                <option value="lujo">Lujo</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="fecha">Fecha de alta</label>
                        <input type="datetime-local" id="fecha" required/>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="">Nombre del chofer</label>
                        <input type="text" required/>
                        <i></i>
                    </div>
                    <div className="inputbox">
                        <label htmlFor="">No. de licencia</label>
                        <input type="text" required/>
                        <i></i>
                    </div>
                    <input type='button' value='Registrar Autobus' onClick={handlerClick} className="button_alta" />
                    
                </form>
        </div> 
     );
}

export default FormAlta;