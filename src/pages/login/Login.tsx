import { useState } from "react";
import { Header } from "../../components/header/Header";
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
      nav("/dashboard");
    }
  };
  return (
    <>
      <div className="page_wrapper">
        <Header />
        <div className="login_container">
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
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
              <label htmlFor="password">Password:</label>
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
          </div>
        </div>
      </div>
    </>
  );
};
