import React from 'react'
import Link from 'next/link'
import './navbar.sass'

interface NavbarProps {
    className?: string
    colorBg?: 'primary-navigation' | 'secondary-navigation'
}

function Navbar({className, colorBg}: NavbarProps) {
  return (
    <nav className={`navbar ${className} ${[colorBg]}`}>
        <Link href={'/'}>
            <h1 className='navbar__heading'>visionPX</h1>
        </Link>
        <div className='navbar__btn-container'>
            <Link href='#allImages'>
              <span className='btn-link-label'>Explora</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
