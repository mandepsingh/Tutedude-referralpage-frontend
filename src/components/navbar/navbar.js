import React, {useState} from 'react'
import Logo from "../../images/logo.png"
import Profile from "../../icons/profile.png"
import Dropdown from "../../icons/dropdown.png"
import "./navbar.css"

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={Logo} alt="logo" />
        </div>
        <ul className="nav-links">
            <li className='nav-link-assignment'><a href="/">My Assignment</a></li>
            <li className='nav-link-chat'><a href="/">Chat with Mentor</a></li>
            <li
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            >
                
                <a className='nav-links-profile' href="/"><img src={Profile} alt="Profile" className='profile-icon'/>ProfileName <img src={Dropdown} alt="Dropdown" className='drop-icon'/></a>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                    <a href="/">Service 1</a>
                    <a href="/">Service 2</a>
                    <a href="/">Service 3</a>
                    </div>
                )}
            </li>
        </ul>
    </div>
  )
}

export default Navbar