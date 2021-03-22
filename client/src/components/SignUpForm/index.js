import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SignupForm() {

  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {};
  
  return(
    <main>
      <div className="hero-image">
        <div className="hero-text">
          <h3> Create an account to write reviews!</h3>
        </div> 
      </div>
    <motion.div
      initial={{ y: -800}}
      animate={{ y: 0}}
      transition={{ duration: .75}}
      className="container">
        <div className="row">
          <form className="col s12">
            <div className="card z-depth-2">
            <h4 className="col s12 center-align">Sign Up</h4>
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input id="first_name" type="text" className="validate" onChange={e => setRegisterFirstName(e.target.value)}/>
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
            <div className='row'>
              <div className="input-field col s8 offset-s2">
                <input id="last_name" type="text" className="validate" onChang={e => setRegisterLastName(e.target.value)} />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input id="password" type="password" className="validate" onChange={e => setRegisterEmail(e.target.value)} />
                <label htmlFor="password">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input id="password" type="password" className="validate" onChange={e => setRegisterPassword(e.target.value)} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="btn waves-effect waves-light btn-large" type="submit" name="action" onClick={register} >Sign up</button>
            </div>
            <div className="row">
              <a href="/login">Already have an account? Click here to log in!</a>
            </div>
            <br />
            </div>
          </form>
        </div>
      </motion.div>
      </main>
  )
}

export default SignupForm;