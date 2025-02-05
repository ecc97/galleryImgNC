import React from 'react'
import './input.sass'

interface InputProps {
    type: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    className?: string,
    required?: boolean,
}

function Input({ type, name, placeholder, value, onChange, className }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input w-full ${className?? ''}`}
    />
  )
}

export default Input
