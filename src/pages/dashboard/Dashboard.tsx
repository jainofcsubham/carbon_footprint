import { Header } from "../../components/header/Header";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { Calculator } from "../calculator/Calculator";

export const Dashboard = () => {
  return (
    <>
      <div className="page_wrapper">
        <Header isLoggedIn />

        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/home" element={<Home />} />
          <Route path="/groups" element={<Calculator />} />
        </Routes>

      </div>
    </>
  );
};
