import {useNavigate} from 'react-router-dom'
export function Signin(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/About`; 
      navigate(path);
    }
    const routeChange1 = () =>{ 
        let path = `/login`; 
        navigate(path);
      }
    return(
        <div>
        <h1>Make a New Account</h1> 
        <form className='loginform'
         style={{
            backgroundColor:'rgba(0,0,0,0.8)',
        }}>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>
        <label for="pass"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pass" required/>
        <label for="confpass"><b>Confirm Password</b></label>
        <input type="password" placeholder="Enter Password to confirm" name="confpass" required/>
        <label for="age"><b>Age</b></label>
        <input type="number" placeholder="Enter Age" name="age" min='12' max='80' required/>
        <button type="submit">Register</button>
        <br />
        <button onClick={routeChange1}>Already have an Account</button>
        <label>
        <input type="checkbox" name="remember"/>Remember Me
        </label>
        </form>
        <button className='knowMore' onClick={routeChange}>
          KNOW MORE
        </button>
        </div>
    )
}