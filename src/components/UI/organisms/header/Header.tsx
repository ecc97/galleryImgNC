import React from 'react'
import './header.sass'

interface HeaderProps {
    children: React.ReactNode
    className?: string;
}

function Header({ children, className }: HeaderProps) {
  return (
    <header className={`header ${className}`}>
        {children}
    </header>
  )
}

export default Header
