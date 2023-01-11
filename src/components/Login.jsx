import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      <div className="register">
        <div className="card">
          <div className="card-header">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User name"
                  id="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                />
              </div>

              <div className="form-group">
                <input type="submit" value="Login" className="btn" />
              </div>
              <div className="form-group">
                <span>
                  <Link to="/register">Don't have any account?</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login