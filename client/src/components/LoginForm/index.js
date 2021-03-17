import React from 'react';

function LoginForm() {

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
        <div className="row">
          <button className="btn waves-effect waves-light col offset-s2 btn-large" type="submit" name="action">Log In</button>
        </div>
        <div className="row">
          <a href="/sign-up">Sign Up</a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LoginForm;