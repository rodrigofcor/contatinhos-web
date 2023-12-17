'use client'

import React from 'react'

interface TextInputProps {
  className?: string
  id?: 'string'
  type?: 'text' | 'email' | 'date' | 'password'
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> =({className, id, type = 'text', placeholder, value, onChange }) => {
	return (
		<input className={ ` ${className} w-full focus:outline-none p-1.5 rounded-lg border-solid border-2 border-pink-3 dark:border-brown-2 focus:border-pink-5 dark:focus:border-brown-1 dark:focus:to-brown-1 placeholder:text-brown-2 dark:placeholder:text-brown-1 focus:text-brown-3 bg-pink-1 dark:bg-brown-4 focus:bg-pink-2 dark:focus:bg-brown-2` }
			id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
	)
}

export default TextInput
