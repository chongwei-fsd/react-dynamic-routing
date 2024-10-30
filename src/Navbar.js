import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='app-nav'>
        <Link className='app-link' to='/'>Home</Link>
        <Link className='app-link' to='/contact'>Contact</Link>
        <Link className='app-link' to='/skills'>Skills</Link>
    </nav>
  )
}
