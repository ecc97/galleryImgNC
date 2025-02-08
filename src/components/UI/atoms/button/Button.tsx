import React from 'react'
import './button.sass'

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' |'submit' |'reset';
    size?: 'small' |'medium' | 'large';
    color?: 'primary' |'secondary' | 'tertiary';
    variant?: 'filled' | 'outline';
    icon?: React.ReactNode;
    children: React.ReactNode;
}

function Button({ onClick, className, color, children, ...props}: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn ${className} ${[color]}`} {...props}>
        {children}
    </button>
  )
}

export default Button
