'use client'

import React, { useState } from 'react'
import TextInput from '@/app/components/TextInput'
import TextArea from '@/app/components/TextArea'
import Select from '@/app/components/Select'
import MultipleSelect from '@/app/components/MultipleSelect'

const NewUserPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [bunda, setBunda] = useState('')

	const [values, setValues] = useState<Array<string>>([])

	const add = (value: string) => {
		console.log(value)
		const newValues = [...values, value]
		setValues(newValues)
	}

	const remove = (value: string | number) => {
		const newValues = values.filter((item) => item !== value)
		setValues(newValues)
	}

	const test = [
		{value: '1', label: 'test1'},
		{value: '2', label: 'test2'},
		{value: '3', label: 'test3sfdsfsfsfsfsfsfsfsfs'},
		{value: '4', label: 'test4'},
		{value: '5', label: 'test5'},
		{value: '6', label: 'test5'},
		{value: '8', label: 'test5'},
		{value: '9', label: 'test5'},
		{value: '10', label: 'test5'},
		{value: '11', label: 'test5'},
		{value: '12', label: 'test5'},
	]

	return (
		<main className="h-screen flex justify-center items-center">
			<div className='bg-white dark:bg-brown-3 dark:text-white px-6 py-8 rounded-lg flex flex-col gap-8'>
				<div className='grid grid-cols-3 gap-8'>
					<TextInput placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />

					<TextInput placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

					<TextInput type='date' placeholder='Nascimento' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
				</div>

				<div className='grid grid-cols-3 gap-8'>
					<Select options={test} placeholder='opa' value={bunda} onChange={(e) => setBunda(e.target.value)} />
				</div>

				<div className='grid grid-cols-2 gap-8'>
					<TextArea placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

					<MultipleSelect options={test} placeholder='opa' values={values} onAddClick={(value) => add(value)} onRemoveClick={(value) => remove(value)} />
				</div>
			</div>
		</main>
	)
}

export default NewUserPage