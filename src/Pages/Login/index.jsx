import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../Config/Redux/Auth/auth.action";

const Login = () => {
  const initialAuthState = {
    username: "",
    email: "",
    password: "",
  };

  const history = useHistory();

  const [credential, setCredential] = useState(initialAuthState);
  const [isLoading, setIsLoading] = useState(false);

  const message = useSelector((state) => state.message.message);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(isLogin);
    if (isLogin) {
      history.push("/");
    }
  }, [isLogin, history]);
  const handleLogin = (e) => {
    const { username, password } = credential;
    setIsLoading(true);
    dispatch(login(username, password))
      .then((data) => {
        // console.log(data);
        history.push("/");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
    // console.log(message);
    e.preventDefault();
    // Fo;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredential({ ...credential, [name]: value });
  };

  // console.log(isLoading);
  return (
    <div>
      <div className="wrap-login">
        {/* TITLE  */}
        {/* FORM  */}
        <form
          onSubmit={handleLogin}
          // ref={(c) => {
          //   form = c;
          // }}
          className="wrap-form"
        >
          <div className="signup">
            <div className="form-title">Sign In to Access This WebApp!</div>

            {/* BODY FORM  */}
            <div className="form-body mt-2 mb-2">
              <div className="row">
                <input
                  type="text"
                  placeholder="Username*"
                  name="username"
                  id="username"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="row">
                <input
                  type="password"
                  placeholder="Password*"
                  name="password"
                  id="password"
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
            {isLoading ? (
              <div className="form-footer">
                <button
                  className="btn btn-disabled"
                  style={{ width: "100%", padding: 15 }}
                  disabled
                >
                  <div className="btn-loader"></div> LOGIN ...{" "}
                </button>
              </div>
            ) : (
              <div className="form-footer">
                <button className="btn btn-login">LOGIN</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
