import { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <>

      <div className='container'>        
             <div className='content'>
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
      </div>
      
    </>
  )
}

export default Login
