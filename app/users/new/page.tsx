'use client'

import React, { useState, useEffect } from 'react'
import TextInput from '@/app/components/TextInput'
import TextArea from '@/app/components/TextArea'
import Select from '@/app/components/Select'
import MultipleSelect from '@/app/components/MultipleSelect'
import Button from '@/app/components/Button'
import ImageInput from '@/app/components/ImageInput'

const NewUserPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [birthDate, setBirthDate] = useState('')

	const [colleges, setColleges] = useState<Array<{id: string, shortName: string, fullName: string}>>([])
	const [collegeId, setCollegeId] = useState('')

	const [isDisabledCourses, setIsDisabledCourses] = useState(false)
	const [courses, setCourses] = useState<Array<{id: string, name: string}>>([])
	const [courseId, setCourseId] = useState('')

	const [description, setDescription] = useState('')

	const [interests, setInterests] = useState<Array<{id: number, name: string, createdAt: string}>>([])
	const [interestIds, setInterestIds] = useState<Array<string>>([])

	const genderOptions = [
		{value: 'MALE', label: 'Masculino'},
		{value: 'FEMALE', label: 'Feminino'},
		{value: 'OTHER', label: 'Outro'}
	]
	const [gender, setGender] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resColleges = await fetch('http://localhost:3333/colleges')
				const collegesData = await resColleges.json()
				setColleges(collegesData)

				const resCourses = await fetch('http://localhost:3333/courses')
				const coursesData = await resCourses.json()
				setCourses(coursesData)

				const resInterests = await fetch('http://localhost:3333/interests')
				const interestsData = await resInterests.json()
				setInterests(interestsData)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if(!collegeId || collegeId === '') {
			setIsDisabledCourses(true)
			setCourseId('')

			return
		}

		setIsDisabledCourses(false)
	}, [collegeId])

	const addInterestId = (value: string) => {
		const newValues = [...interestIds, value]
		setInterestIds(newValues)
	}

	const removeInterestId = (value: string) => {
		const newValues = interestIds.filter((item) => item !== value)
		setInterestIds(newValues)
	}

	return (
		<main className="h-screen flex justify-center items-center">
			<div className='w-4/6 bg-white dark:bg-brown-3 dark:text-white px-6 py-8 rounded-lg flex flex-col gap-8'>
				<div className='grid grid-cols-3 gap-8'>
					<TextInput placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />

					<TextInput placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

					<TextInput type='date' placeholder='Nascimento' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
				</div>

				<div className='grid grid-cols-3 gap-8'>
					<Select options={genderOptions} placeholder='Gênero' hidePlaceholder value={gender} onChange={(e) => setGender(e.target.value)} />

					<Select options={colleges.map(college => ({value: college.id, label: `${college.shortName} - ${college.fullName}`}))}
						placeholder='Universidade' value={collegeId} onChange={(e) => setCollegeId(e.target.value)} />

					<Select options={courses.map(course => ({value: course.id, label: course.name}))}
						placeholder='Curso' disabled={isDisabledCourses} value={courseId} onChange={(e) => setCourseId(e.target.value)} />
				</div>

				<div className='grid grid-cols-2 gap-8'>
					<TextArea placeholder='Descrição' value={description} limit={500} onChange={(e) => setDescription(e.target.value)} />

					<MultipleSelect options={interests.map(interest => ({value: interest.id.toString(), label: interest.name}))}
						placeholder='Interesses' values={interestIds} limit={12} onAddClick={(value) => addInterestId(value)} onRemoveClick={(value) => removeInterestId(value)} />
				</div>

				<div className='flex justify-center'>
					<div className='w-32'>
						<ImageInput id={'id'} />
					</div>
				</div>

				<div className='flex justify-center'>
					<Button className='bg-red-light dark:bg-purple rounded-lg w-72 p-2'>Salvar</Button>
				</div>
			</div>
		</main>
	)
}

export default NewUserPage