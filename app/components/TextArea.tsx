'use client'

import React from 'react'

interface TextAreaProps {
  className?: string
	rows?: number
  id?: 'string'
  placeholder: string
  value: string
	limit?: number
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> =({className, rows=4, id, placeholder, value, limit, onChange }) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		console.log(e)
		const newValue = limit ? e.target.value.substring(0, limit) : e.target.value
		onChange({ ...e, target: { ...e.target, value: newValue } })
	}

	return (
		<div className='flex flex-col gap-2'>
			<textarea className={ ` ${className} w-full focus:outline-none p-1.5 rounded-lg border-solid border-2 border-pink-3 dark:border-brown-2
			focus:border-pink-5 dark:focus:border-brown-1 dark:focus:to-brown-1
			placeholder:text-brown-2 dark:placeholder:text-brown-1 focus:text-brown-3
			bg-pink-1 dark:bg-brown-4 focus:bg-pink-2 dark:focus:bg-brown-2 resize-none` }
			rows={rows}	id={id} placeholder={placeholder} value={value} onChange={e => handleChange(e)}/>

			{limit && (
				<div className='flex justify-end text-brown-2'>{value.length}/{limit}</div>
			)}
		</div>
	)
}

export default TextArea
