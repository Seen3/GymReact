import { Link} from "react-router-dom";
export function About() {
    return (
      <div style={{
        backgroundColor:'rgba(50,0,50,0.7)',
        width:'100%',
        margin:'0 auto',
        transform: 'translateY(-50%, -50%)',
        height:'97vh',
        top:'20%',
      }}>
        <main>
          <h2>What is this app?</h2>
          <p>
            This was made to be an app for buidling and maintaining a workout routine.
          </p>
        </main>
        <nav>
          <Link to="/Login"  style={{
          color:'crimson',
          textDecoration:'none',
        }}>Login</Link>
        <br/>
        <Link to="/signin"  style={{
          color:'crimson',
          textDecoration:'none',
        }}>Register</Link>
        </nav>
      </div>
    );
  }
  
  