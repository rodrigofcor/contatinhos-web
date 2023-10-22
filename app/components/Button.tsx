'use client'

import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  className?: string
  children?: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({className, children, onClick }) => {
  return (
    <button className={`${className} hover:opacity-60 transform hover:scale-105 transition-transform duration-300 ease-in-out`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
