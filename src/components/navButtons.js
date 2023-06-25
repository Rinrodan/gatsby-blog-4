import React from "react";
import { Link } from 'gatsby'
import {
  navContainer,
  navLinks,
  navLinkItem,
  navLinkText 
} from './layout.module.css';

const NavButtons = ({ pageTitle, children }) => {
    return (
      <div className={navContainer}>    

      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    )
  }
  
  export default NavButtons