import { useNavigate } from "react-router-dom";
import "./Hero.css"

export const Hero = () => {

  const navigate = useNavigate()

  const goToCalculator = () => {
    navigate("/calculator")
  }

  return (
    <>
      <div className="hero_container">
        <h1 className="hero_text">Calculate Your Carbon Footprint</h1>
        <div className="hero_action">
          <div className="hero_action_item get_started" onClick={goToCalculator}>Get Started</div>
          <div className="hero_action_item ">Learn More</div>
        </div>
      </div>
    </>
  );
};
