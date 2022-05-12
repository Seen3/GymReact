import React from "react";
import {useNavigate} from 'react-router-dom'
let emptyInput = {
  backgroundColor: 'rgba(1,1,1,0.2)',
  color: 'wheat',
  border: 'none',
  fontSize: '1em',
  width: '10em',
  borderBottom: '2px solid grey'
}

class Weekday extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dayBox">
        <h1 style={{
          width: "5em"
        }}>{this.props.day}</h1>
        <label>Exercise <input type="text" style={{
          width:'10em',
          backgroundColor:'rgba(0,0,0,0.5)',
          color:'white',
          border: 'none',
        }}/></label>
        <label className="label"><input type="checkbox" /><input type="text" style={emptyInput} /></label>
        <label className="label"><input type="checkbox" /><input type="text" style={emptyInput} /></label>
        <label className="label"><input type="checkbox" /><input type="text" style={emptyInput} /></label>
        <label className="label"><input type="checkbox" /><input type="text" style={emptyInput} /></label>
        <label className="label"><input type="checkbox" /><input type="text" style={emptyInput} /></label>
        <label className="label"><input type="checkbox" /><input type="text" style={emptyInput} /></label>
      </div>
    )
  }
}


export function Home() { 
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/login`; 
      navigate(path);
    }
  return (
    <div>
      <div className='workoutPage'>
        <h1 >Workout Schedule</h1>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
        }}>
          <h2 style={{
            width: '7em'
          }}>Month/Week</h2>
          <input type="text" style={
            emptyInput
          } />
        </div>
      </div>
      <div>
        <Weekday day="Monday" />
        <Weekday day="Tuesday" />
        <Weekday day="Wednesday" />
        <Weekday day="Thursday" />
        <Weekday day="Friday" />
        <Weekday day="Saturday" />
        <Weekday day="Sunday" />
      </div>
      <button onClick={routeChange}>Logout</button>
    </div>

  )
}
