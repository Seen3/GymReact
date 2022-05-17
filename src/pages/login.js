//Seen  APqxtOl2m9eakm8T
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
export function Login() {
    const [uname, setName] = useState("");
    const [pass, setPass] = useState("");
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/About`; 
      navigate(path);
    }
    const routeChange3 = () =>{ 
      let path = `/signin`; 
      navigate(path);
    }
    const HandleSubmit =async(e)=>{
      e.preventDefault();
      fetch(
        'http://localhost:5000/enter', {
            method: "post",
            body: JSON.stringify({ uname,pass}),
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }).then(resp=>{
          if(resp.status===201){
            alert("Invalid Credentials")
          }
          else{
            navigate('/');
          }
        });
    };
    const routeChange2 = () =>{ 
      let path = `/`;
      let logintry=1;
      if (logintry) 
        navigate(path);
      else
        alert("Invalid Username/Password")
    }
    
    return (
      <div>
          <h2>Welcome to the Login Page</h2> 
        <form className='loginform'>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" value={uname} onChange={(e)=>setName(e.target.value) }required/>
        <label for="pass"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pass"  value={pass} onChange={(e)=>setPass(e.target.value)} required/>
        <button type="submit" onClick={HandleSubmit}>Login</button>
        <br />
        <button onClick={routeChange3}>
          REGISTER
        </button>
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
  