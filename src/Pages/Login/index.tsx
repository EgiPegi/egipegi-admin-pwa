import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const login = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="wrap-login">
        {/* TITLE  */}
        {/* FORM  */}
        <div className="wrap-form">
          <div className="signup">
            <div className="form-title">Sign In to Access This WebApp!</div>

            {/* BODY FORM  */}
            <div className="form-body mt-2 mb-2">
              <div className="row">
                <input type="email" placeholder="Email Address*" />
              </div>
              <div className="row">
                <input type="password" placeholder="Password*" />
              </div>
            </div>
            <div className="rule"></div>

            {/* FOOTER FORM  */}
            <div className="form-footer">
              <button className="btn btn-login" onClick={login}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
