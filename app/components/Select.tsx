'use client'

import React from 'react'

interface Option {
	value: string | number
	label: string | number
}

interface SelectProps {
  className?: string
  id?: 'string'
  placeholder: string
	options: Array<Option>
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> =({className, id, placeholder, options, value, onChange }) => {
	return (
		<select className={ ` ${className} w-full focus:outline-none p-1.5 rounded-lg border-solid border-2 border-pink-3 dark:border-brown-2 focus:border-pink-5 dark:focus:border-brown-1 dark:focus:to-brown-1 placeholder:text-brown-2 dark:placeholder:text-brown-1 focus:text-brown-3 bg-pink-1 dark:bg-brown-4 focus:bg-pink-2 dark:focus:bg-brown-2` }
			id={id} value={value} onChange={onChange}>
			<option value =''>{placeholder}</option>

			{options.map((option) => (
				<option key={option.value} value={option.value}>{option.label}</option>
			))}
		</select>
	)
}

export default Select
