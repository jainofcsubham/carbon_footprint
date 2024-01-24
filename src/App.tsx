
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Landing } from "./pages/landing/Landing";
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import "./App.css"

export const App = () => {
  return (
    <>
      {/* <div className='wrapper'>
        <div className='header'>Header</div>
        <div className='center'>Center</div>
        <div className='footer'>Footer</div>
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
};
