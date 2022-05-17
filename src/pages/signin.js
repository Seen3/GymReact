import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
export function Signin(){
    let navigate = useNavigate(); 
    const [uname, setName] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState("");
    const [confpass, setConfPass] = useState("");
    const routeChange = () =>{ 
      let path = `/About`; 
      navigate(path);
    }
    const routeChange1 = () =>{ 
        let path = `/login`; 
        navigate(path);
      }
      const handleOnSubmit = async (e) => {
        e.preventDefault();
        if(pass!=confpass)
        {
            alert("Passwords are not same");
            return;
        }
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ uname,pass,age }),
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setPass("");
            setName("");
            setConfPass("");
            setAge(0);
        }
    }
    return(
        <div>
        <h1>Make a New Account</h1> 
        <form className='loginform'
         style={{
            backgroundColor:'rgba(0,0,0,0.8)',
        }}>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" value={uname} onChange={(e)=>setName(e.target.value)} required/>
        <label for="pass"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)} required/>
        <label for="confpass"><b>Confirm Password</b></label>
        <input type="password" placeholder="Enter Password to confirm" value={confpass} onChange={(e)=>setConfPass(e.target.value)} name="confpass" required/>
        <label for="age"><b>Age</b></label>
        <input type="number" placeholder="Enter Age" name="age" min='12' max='80' value={age} onChange={(e)=>setAge(e.target.value)} required/>
        <button type="submit" onClick={handleOnSubmit}>Register</button>
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