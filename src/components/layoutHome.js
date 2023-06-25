import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  header,

} from './layoutHome.module.css'
import NavButtons from './navButtons'

const LayoutHome = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <div className='header'>
        <div><NavButtons/></div>
      </div>
    <main>
      
    </main>
    <footer>

    </footer>
  </div>
  )
}

export default LayoutHome