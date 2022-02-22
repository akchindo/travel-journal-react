import React from "react";
import "../styles/styles.css";
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';

import { BiWorld } from 'react-icons/bi';

function Header() {
  return (
    <div className='header'>
       <FaGlobeAmericas className="iconGlobe"/> 
       <p>my travel journal.</p>
       {/* <h3> Lets go for a <BiWorld />? </h3> */}
    </div>

      
  );
}

export default Header;
