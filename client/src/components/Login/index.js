import { Component } from 'react';

class Login extends Component {
render() {
  return(
      <div className="container">
        <div className="row">
          <form className="col s12">
            <h4 className="col s12 center-align">Sign Up</h4>
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input id="first_name" type="text" className="validate"/>
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
            <div className='row'>
              <div className="input-field col s8 offset-s2">
                <input id="last_name" type="text" className="validate"/>
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
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
            <button className="btn waves-effect waves-light col offset-s2" type="submit" name="action">Sign up</button>
          </form>
        </div>
      </div>
  )
}

}

export default Login;