
import { useNavigate } from "react-router-dom"
import "./Header.css"
export const Header = () => {


  const navigate = useNavigate();
  
  const goToLogin = () => {
    navigate("/login");
  }

  const goToRegister = () => {
    navigate("/register");
  }

  return (
    <>
        <div className='header_container'>
          <div className='header_wrapper'>
              <div className='logo'>CARBONCALC</div>
              <div className='nav_bar'>
                  <div className='nav_item'>About</div>
                  <div className='nav_item'>Calculator</div>
                  <div className='nav_item'>Methodology</div>
                  <div className='nav_item'>FAQ</div>
                  <div className='nav_item'>Contact</div>
              </div>
              <div className='action_bar'>
                  <div className='action_item' onClick={goToLogin}>Login</div>
                  <div className='action_item action_item_register' onClick={goToRegister}>Register</div>
              </div>
          </div>
        </div>
    </>
  )
}

