
import "./navbar.css"
import logo from "../../src/assets/logo.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {


  const user = {
    name: "Abhishek",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
    rollno: "0126CS231011"
  };




  return (
    <div className='nav-main'>
      <div className="nav-logo">
        <i class="ri-close-line"></i>
        <img src={logo} alt="" />
      </div>
      <div className="nav-text">
        <p>Main</p>
      </div>
      <div className="nav-features">
        <div className="nav-features-items">
          <NavLink>
            <i class="ri-dashboard-line"></i>
            <p>Dashboard</p>
          </NavLink>
          <NavLink>
              <i className="ri-message-2-line"></i>
                <p>Chat AI</p>
          </NavLink>
        
          <NavLink>
             <i className="ri-book-open-line"></i>
                <p>Bulletin</p>
          </NavLink>
          <NavLink>
         <i className="ri-camera-line"></i>
                <p>Scan Docs</p>
          </NavLink>
          <NavLink>
              <i className="ri-wechat-2-line"></i>
                <p>WhatsApp Bot</p>
          </NavLink>
          
          <NavLink>
                 <i className="ri-wechat-line"></i>
                <p>Volunteers Help</p>
          </NavLink>
          <NavLink>
                <i className="ri-wifi-off-line"></i>
                <p>Offline Mode</p>
          </NavLink>
          <NavLink>
             <i className="ri-computer-line"></i>
                <p>AI Agent</p>
          </NavLink>
          <NavLink>
               <i className="ri-settings-2-line"></i>
              <p>Settings</p>
          </NavLink>


        </div>
      </div>
    </div>
  )
}

export default Navbar
