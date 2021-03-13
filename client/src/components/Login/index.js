import React from 'react';

function Login() {

  function handleInputChange(e) {
    e.preventDefault();
    
  }

  return(
    <div className='container'>
    <div className="row">
      <form className="col s12">
        <h5 className="col s12 center-align">Log In</h5>
        <div className="row">
          <div className="input-field col s8 offset-s2">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8 offset-s2">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light col offset-s2" type="submit" name="action">Log In</button>
      </form>
    </div>
  </div>
  )
}

export default Login;