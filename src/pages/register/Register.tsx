import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

interface Credentials {
  first_name : string
  last_name : string
  email: string;
  password: string;
  gender: string;
  date_of_birth: string;
}

export const Register = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    first_name : "",
    last_name : "",
    email: "",
    password: "",
    gender: "",
    date_of_birth: "",
  });

  const nav = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const handleRegister = () => {
    // Add your login logic here
    console.log(credentials);
    // if (credentials.password && credentials.email) {
    //   nav("/dashboard/home");
    // }
  };

  const handleLogin= () =>{
    nav("/login")
  }


  const goToHome = () => {
    nav("/")
  }

  return (
    <>
      <div className="page_wrapper">
        <div className="register_container">
          <div className="register-form">
            <div className="register_logo" onClick={goToHome}>CARBONCALC</div>
            <div className="register_box">
              <div className="register_title">Register</div>
              <div className="form_container">
              <div className="form_row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={credentials.first_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="last_name"
                    id="last_name"
                    name="last_name"
                    value={credentials.last_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form_row">
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={credentials.email}
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
              </div>
              <div className="form_row">
              <div className="form-group">
                  <label htmlFor="date_of_birth">DOB</label>
                  <input
                    type="date"
                    id="date_of_birth"
                    name="date_of_birth"
                    value={credentials.date_of_birth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={credentials.gender}
                    onChange={handleSelectChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    </select>
                </div>
               
              </div>

              <div className="form-group">
                <button onClick={handleRegister}>Register</button>
              </div>
              </div>
              
              <div className="register_already_account">
                <div
                  className="register_already_account_title"
                >
                  Already have an account?
                </div>
                <div
                  onClick={handleLogin}
                  className="register_already_account_cta"
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
