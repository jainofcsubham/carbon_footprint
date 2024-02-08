import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

interface Credentials {
  username: string;
  password: string;
}

export const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const nav = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Add your login logic here
    if (credentials.password && credentials.username) {
      nav("/dashboard/home");
    }
  };

  const handleRegisterNow = () =>{
    nav("/register")
  }

  const handleForgotPass = () =>{
    nav("/forgot-password")
  }

  const goToHome = () => {
    nav("/")
  }

  return (
    <>
      <div className="page_wrapper">
        <div className="login_container">
          <div className="login-form">
            <div className="login_logo" onClick={goToHome}>CARBONCALC</div>
            <div className="login_box">
              <div className="login_title">Login</div>
              <div className="login_register_title">
                <div className="login_no_account">Don't have an account yet?</div>
                <div onClick={handleRegisterNow} className="login_register_cta">Register Now</div>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <button onClick={handleLogin}>Login</button>
              </div>
              <div className="login_forgot_pass_container">
                <div onClick={handleForgotPass} className="login_forgot_pass">Forgot your password?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
