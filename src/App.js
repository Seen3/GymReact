import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/login';
import {About} from './pages/about';
import {Home} from './pages/home'; 
import { Signin } from './pages/signin';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
