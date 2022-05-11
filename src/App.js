import './App.css';
import { Routes, Route, Link } from "react-router-dom";
function Login() {
  return (
    <div>
        <h2>Welcome to the Login Page</h2> 
      <form className='loginform'>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>
      <label for="pass"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="pass" required/>
      <button type="submit">Login</button>
      <label>
      <input type="checkbox" name="remember"/>Remember Me
      </label>
      </form>
      <button className='knowMore'>
        KNOW MORE
      </button>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
