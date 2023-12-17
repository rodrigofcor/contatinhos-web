'use client'

import React, { useState } from 'react'
import TextInput from '@/app/components/TextInput'
import TextArea from '@/app/components/TextArea'
import Select from '@/app/components/Select'

const NewUserPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [bunda, setBunda] = useState('')

	const test = [
		{value: 1, label: 'test1'},
		{value: 2, label: 'test2'},
		{value: 3, label: 'test3'},
		{value: 4, label: 'test4'},
		{value: 5, label: 'test5'},
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

					<Select options={test} placeholder='opa' value={bunda} onChange={(e) => setBunda(e.target.value)} />

					<Select options={test} placeholder='opa' value={bunda} onChange={(e) => setBunda(e.target.value)} />
				</div>

				<div className='grid grid-cols-2 gap-8'>
					<TextArea placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
			</div>
		</main>
	)
}

export default NewUserPage