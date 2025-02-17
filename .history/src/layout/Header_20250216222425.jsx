import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <NavLink className='header__page-name' to='/'><h1>Im Your Fan Store</h1></NavLink>
      <img src='/src/img/Icono Redes Sociales - IYF.jpg' alt='Im Your Fan Store' className='header__logo' />
      <ul className='header__navbar'>
        <li className='header__link'><NavLink to='/login'><i className='bx bx-user'></i></NavLink></li>
        <li className='header__link'><NavLink to='/purchases'><i className='bx bx-box'></i></NavLink></li>
        <li className='header__link'><NavLink to='/cart'><i className='bx bx-cart'></i></NavLink></li>
      </ul>
    </header>
  )
}

export default Header