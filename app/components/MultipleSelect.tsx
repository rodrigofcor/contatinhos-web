'use client'

import React, { useState } from 'react'
import Select from './Select'
import Button from './Button'

interface Option {
	value: string
	label: string
}

interface MultipleSelectProps {
  className?: string
  id?: 'string'
  placeholder: string
	options: Array<Option>
  values: Array<string>
	onAddClick?: (event: string) => void
	onRemoveClick?: (event: string) => void
}

const MultipleSelect: React.FC<MultipleSelectProps> =({className, id, placeholder, options, values, onAddClick, onRemoveClick }) => {
	const [selectedValue, setSelectedValue] = useState('')

	const add = () => {
		if(!selectedValue || selectedValue === '' || !onAddClick) {
			return
		}

		if(values.includes(selectedValue)) {
			return
		}

		onAddClick(selectedValue)
		setSelectedValue('')
	}

	const remove = (value: string) => {
		if(!onRemoveClick) {
			return
		}

		onRemoveClick(value)
	}

	return (
		<div className={`${className} w-full flex flex-col gap-8`}>
			<div className='flex gap-4'>
				<Select id={id} options={options.filter((option) => !values.includes(option.value))} placeholder={placeholder} value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} />

				<div>
					<Button className='bg-red-light dark:bg-purple rounded-full p-1.5 w-10 h-10 relative' onClick={() => add()}>
						<span className='absolute top-0 left-3 text-3xl'>+</span>
					</Button>
				</div>
			</div>

			<div className='flex flex-wrap gap-4 max-w-[26rem]'>
				{options.filter(option => values.includes(option.value)).map(option => (
					<span className='bg-pink-3 dark:bg-pink-6 rounded-xl px-3.5 py-0.5 hover:opacity-60 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:text-red-dark' key={option.value} onClick={() => remove(option.value)}>
						{option.label}
					</span>
				))}
			</div>
		</div>
	)
}

export default MultipleSelect