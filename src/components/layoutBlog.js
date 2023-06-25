import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navButtons,
  navLinkItem,
  navLinkText 
} from './layoutBlog.module.css'

const LayoutBlog = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      
    
    
    <nav>
      <ul className={navLinks, navButtons}>
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
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  </div>
  )
}

export default LayoutBlog