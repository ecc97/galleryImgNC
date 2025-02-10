import React from 'react'

interface MainProps {
    children: React.ReactNode;
    className?: string
}

function Main({children, className}: MainProps) {
  return (
    <main className={`main ${className}`}>
        {children}
    </main>
  )
}

export default Main