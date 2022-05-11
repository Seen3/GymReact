import './App.css';
import { Routes, Route} from "react-router-dom";
import { Login } from './pages/login';
import {About} from './pages/about';

function Home(){

  return(
    <div>
      <table>
        <tr>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
        </tr>
        <tr>
        </tr>
      </table>
    </div>
    
  )
}


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
