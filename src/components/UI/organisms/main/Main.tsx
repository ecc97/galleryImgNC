import React from 'react'
import './main.sass'

interface MainProps {
    children: React.ReactNode;
    className?: string
    id?: string
}

function Main({children, className, id}: MainProps) {
  return (
    <main className={`main ${className}`} id={id}>
        {children}
    </main>
  )
}

export default Main