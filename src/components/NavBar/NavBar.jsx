import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'


const NavBar = () => {
  return (
    <div className={styles.navBar} >
        <ul>
            <Link to='/' >
            <li>Главная</li>
            </Link>
            <Link to='/FAQ' >
            <li>FAQ</li>
            </Link>
            <Link to='/Contacts' >
            <li>Контакты</li>
            </Link>
            <Link to='/Pets' >
            <li>Каталог</li>
            </Link>
            <Link to='/FAQ' >
            <li>Магазин</li>
            </Link>
        </ul>
    </div>
  )
}

export default NavBar