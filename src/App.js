import './App.css';
import { Routes, Route} from "react-router-dom";
import { Navigate} from "react-router-dom";
import { Login } from './pages/login';
import {About} from './pages/about';
import {Home} from './pages/home'; 
import { Signin } from './pages/signin';
import { NotFound } from './pages/not_found';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path='/Home' element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Signin' element={<Signin/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404"/>} />
      </Routes>
    </div>
  );
}

export default App;
