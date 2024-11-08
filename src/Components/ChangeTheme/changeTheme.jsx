
import './changeTheme.css';
import React from 'react';
import moonIcon from '../../assets/images/moon.svg';
import sunIcon from '../../assets/images/sun.svg';

const ChangeTheme = ({darkMode,toggleTheme}) => {
  

  return (
   
     <>
     <div className="theme-toggle" onClick={toggleTheme}>
       <img src={darkMode ? sunIcon : moonIcon}  />
     </div>
        
     </>
        
      
    );
};

export default ChangeTheme;
