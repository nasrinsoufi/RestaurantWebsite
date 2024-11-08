import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaHome } from 'react-icons/fa';
import { useCartContext } from "../../Contexts/context";
import ChangeTheme from "../ChangeTheme/changeTheme";
import { useState } from "react";


const TopNavbar =()=>{

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

    const {cart} = useCartContext();
    return(
        
        <div className={`d-flex align-items-center justify-content-between rounded-3 py-2 px-4 border-bottom gap-4 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
         
          <div className="py-4 ">
            <Link to="/"> <FaHome className="navbar-tool-icon " color="green" size={30} />
            </Link></div>
                
               
                <Link to="/cart" className="navbar-tool ms-3">
                  <div className="navbar-tool-ico-box">
                  <span className="navbar-tool-label">{cart.length}</span>
                  <RiShoppingCartLine className="navbar-tool-icon " color="green" size={30} />
                  </div>
                </Link>

                <ChangeTheme darkMode={darkMode} toggleTheme={toggleTheme} />

                <Link to="/login">ورود</Link>
                <Link to="/register">ثبت نام</Link>
                 
        </div>
    
       
    )
}

export default TopNavbar;