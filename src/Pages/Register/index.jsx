import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../Config/Redux/Auth/auth.action";

const Register = () => {
  const history = useHistory();

  const initialAuthState = {
    username: "",
    email: "",
    password: "",
  };

  const [credential, setCredential] = useState(initialAuthState);
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(isLogin);
    if (isLogin) {
      history.push("/");
    }
  }, [isLogin, history]);
  const handleRegister = (e) => {
    const { username, email, password } = credential;
    setIsLoading(true);
    dispatch(register(username, email, password))
      .then((data) => {
        history.push("/");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
    // console.log(username, password)
    e.preventDefault();
    // Fo;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };
  return (
    <div>
      <div className="wrap-login">
        {/* TITLE  */}
        {/* FORM  */}
        <div className="wrap-form">
          <form className="signup" onSubmit={handleRegister}>
            <div className="form-title">Sign Up Now!</div>

            {/* BODY FORM  */}
            <div className="form-body">
              <div className="row">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username*"
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="row">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password*"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {message ? (
              <div
                style={{
                  // width: "100%",
                  textAlign: "center",
                  backgroundColor: "tomato",
                  color: "white",
                  height: 20,
                  padding: 5,
                  margin: 5,
                  borderRadius: 5,
                }}
              >
                {message}
              </div>
            ) : (
              <div
                style={{
                  // width: "100%",
                  textAlign: "center",
                  // backgroundColor: "tomato",
                  color: "white",
                  height: 20,
                  padding: 5,
                  margin: 5,
                  borderRadius: 5,
                }}
              ></div>
            )}
            <div className="rule"></div>
            {/* FOOTER FORM  */}
            <div className="form-footer">
              <button
                className="btn btn-danger mr-1"
                onClick={() => history.goBack()}
              >
                Cancel
              </button>
              {isLoading ? (
                <button className="btn btn-disable">
                  <div className="btn-loader" />
                  Register ...
                </button>
              ) : (
                <button className="btn btn-success">Register</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
