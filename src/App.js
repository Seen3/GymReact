import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/login';
import {About} from './pages/about';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
