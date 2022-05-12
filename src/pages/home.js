export function Home(){

    return(
      <div className='workoutPage'>
        <h1 >Workout Schedule</h1>
        <div style={{display:'flex',
      alignItems:'baseline',
      }}>
        <h2 style={{
          width:'7em'
        }}>Week of</h2>
        <input type="text" style={{backgroundColor:'rgba(1,1,1,0.2)',
                                   color:'wheat',
                                   border:'none',
                                   fontSize:'2em',
                                   width:'3em',
                                   borderBottom:'2px solid grey',
                                      }}/>
        </div>
      </div>
      
    )
  }
  