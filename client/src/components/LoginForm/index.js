import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {};

  return(
    <>
    <div className="hero-image">
    <h3 style={{ color: "white"}}> Have an account? Log in here!</h3>
    </div> 
    <motion.div
      initial={{ y: -500}}  
      animate={{ y: 0}}
      transition={{ duration: .75}}
      className='container'> 
      <div className="row">
        <form className="col s12">
          <div className="card z-depth-2">
          <h5 className="col s12 center-align">Log In</h5>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input id="password" type="password" className="validate" onChange={e => setEmail(e.target.value)} />
              <label htmlFor="password">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input id="password" type="password" className="validate" onChange={e => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light col offset-s2 btn-large" type="submit" name="action" onClick={login}>Log In</button>
          </div>
          <div className="row">
            <a href="/signup">Sign Up</a>
          </div>
          </div>
        </form>
      </div>
    </motion.div>
    </>
  )
}

export default LoginForm;