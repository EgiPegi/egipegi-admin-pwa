import React from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div>
      <div className="wrap-login">
        {/* TITLE  */}
        {/* FORM  */}
        <div className="wrap-form">
          <div className="signup">
            <div className="form-title">Sign Up Now!</div>

            {/* BODY FORM  */}
            <div className="form-body">
              <div className="row">
                <input type="text" placeholder="First Name*" />
                <input type="text" placeholder="Last Name*" />
              </div>
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
              <button
                className="btn btn-danger mr-1"
                onClick={() => history.goBack()}
              >
                Cancel
              </button>
              <button className="btn btn-success">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
