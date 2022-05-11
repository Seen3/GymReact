import {useNavigate} from 'react-router-dom'
export function Login() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/About`; 
      navigate(path);
    }
    
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
        <button className='knowMore' onClick={routeChange}>
          KNOW MORE
        </button>
      </div>
    );
  }
  