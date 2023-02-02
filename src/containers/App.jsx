import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import RegisterBus from '../pages/RegisterBus';
// import Home from '../pages/Home';


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/registerbus" element={<RegisterBus/>} />
                {/* <Route path="/home" element={<Home />} /> */}

                <Route path="/*" element={<NotFound/>} /> 
            </Routes>
        </BrowserRouter>   
     );
}

export default App;