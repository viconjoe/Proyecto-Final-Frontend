import './App.css'

import { useState } from React

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


function App() {

  return (
    <>

      <div className='container'>
        
        <div className='header'>
          <h1>PictoPlanKids</h1>
        </div>

        <div className='footer'>

          <form>
                <label><h1 id="title">Sign in</h1></label>
            <label>
                <br></br>
                Email:
                <br></br>
                <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}></input><br></br>
            </label>
            
            <label>
                <br></br>
                Password:
                <br></br>
                <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}></input><br></br>
            </label>
            
          
               
           </form>

        </div>
       
        <div className='footer'>
          <h1>Footer</h1>
        </div>

      </div>
      
    </>
  )
}

export default App
