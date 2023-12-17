'use client'

import React from 'react'

interface TextAreaProps {
  className?: string
	rows?: number
  id?: 'string'
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> =({className, rows=4, id, placeholder, value, onChange }) => {
	return (
		<textarea className={ ` ${className} w-full focus:outline-none p-1.5 rounded-lg border-solid border-2 border-pink-3 dark:border-brown-2 focus:border-pink-5 dark:focus:border-brown-1 dark:focus:to-brown-1 placeholder:text-brown-2 dark:placeholder:text-brown-1 focus:text-brown-3 bg-pink-1 dark:bg-brown-4 focus:bg-pink-2 dark:focus:bg-brown-2 resize-none` }
			rows={rows}	id={id} placeholder={placeholder} value={value} onChange={onChange} />
	)
}

export default TextArea
