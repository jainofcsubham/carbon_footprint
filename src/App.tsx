
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Landing } from "./pages/landing/Landing";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};
