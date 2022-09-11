import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
// import Logo from '../../../public/logo192.png'
import styles from './Header.module.scss'
import Pet from "../../img/pet.png"

const Header = () => {
  return (
    <div className={styles.header} >
      <div>
        <Link to='/'>
          <img src={Pet} alt='logo' />
        </Link>
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        log in | sign up
      </div>
    </div>
  )
}

export default Header