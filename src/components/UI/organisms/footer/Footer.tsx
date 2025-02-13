import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-center items-center bg-blue-900 p-8'>
        <p className='text-base text-center italic md:text-2xl'>&copy; {new Date().getFullYear()} VisionPX. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
