"use client"
import React from 'react'

interface ILayoutProps {
    children: React.ReactNode;
}

function LayoutComponent({ children }: ILayoutProps) {
  return (
    <>
        {children}
    </>
  )
}

export default LayoutComponent
