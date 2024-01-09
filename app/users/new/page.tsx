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

	const genderOptions = [
		{value: 'MALE', label: 'Masculino'},
		{value: 'FEMALE', label: 'Feminino'},
		{value: 'OTHER', label: 'Outro'}
	]
	const [gender, setGender] = useState('')

	const [birthdate, setBirthdate] = useState('')

	const [colleges, setColleges] = useState<Array<{id: string, shortName: string, fullName: string}>>([])
	const [collegeId, setCollegeId] = useState('')

	const [isDisabledCourses, setIsDisabledCourses] = useState(false)
	const [courses, setCourses] = useState<Array<{id: string, name: string}>>([])
	const [courseId, setCourseId] = useState('')

	const [professions, setProfessions] = useState<Array<{id: string, name: string}>>([])
	const [professionId, setProfessionId] = useState('')

	const [description, setDescription] = useState('')

	const [interests, setInterests] = useState<Array<{id: number, name: string, createdAt: string}>>([])
	const [interestIds, setInterestIds] = useState<Array<string>>([])

	const [images, setImages] = useState<Array<File | null>>([null, null, null, null])
	const [imageUrls, setImageUrls] = useState<Array<string>>(['', '', '' , ''])

	const [password, setPassword] = useState('')
	const [passwordCopy, setPasswordCopy] = useState('')

	const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>, orderNumber: number) => {
		if(!e.target || !e.target.files) {
			return
		}

		const newImage = e.target.files[0]
		if(!newImage) {
			return
		}

		const newImages = [...images]
		newImages[orderNumber] = newImage
		setImages(newImages)

		const newImageUrls = [...imageUrls]
		newImageUrls[orderNumber] = URL.createObjectURL(newImage)
		setImageUrls(newImageUrls)
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resColleges = await fetch('http://localhost:3333/colleges')
				const collegesData = await resColleges.json()
				setColleges(collegesData)

				const resCourses = await fetch('http://localhost:3333/courses')
				const coursesData = await resCourses.json()
				setCourses(coursesData)

				const resProfessions = await fetch('http://localhost:3333/professions')
				const professionsData = await resProfessions.json()
				setProfessions(professionsData)

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

	const save = async () => {
		if(password !== passwordCopy) {
			alert('As senhas não estão iguais.')
			return
		}

		if(password.length < 0) {
			alert('A senha deve conter ao menos 6 caracteres')
			return
		}

		const formData = new FormData()

		images.forEach((image, index) => {
			if(!image) {
				alert('Por favor selecionar todas as fotos')
				return
			}

			formData.append(`image${index + 1}`, image)
		})

		formData.append('userData', JSON.stringify({
			name,
			email,
			gender,
			birthdate: `${birthdate}T00:00:00.000Z`,
			collegeId,
			courseId,
			professionId,
			description,
			interestIds,
			password
		}))

		try {
			await fetch('http://localhost:3333/users', {
				method: 'POST',
				body: formData
			})
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<main className="h-screen flex justify-center items-center">
			<div className='w-4/6 shadow-2xl bg-white dark:bg-brown-3 dark:text-white px-6 py-8 rounded-lg flex flex-col gap-8'>
				<div className='flex justify-around'>
					<div className='w-44 h-44'>
						<ImageInput id='image0' imageUrl={imageUrls[0]} onChange={(e) => handleChangeImage(e, 0)} />
					</div>
					<div className='w-44 h-44'>
						<ImageInput id='image1' imageUrl={imageUrls[1]} onChange={(e) => handleChangeImage(e, 1)} />
					</div>
					<div className='w-44 h-44'>
						<ImageInput id='image2' imageUrl={imageUrls[2]} onChange={(e) => handleChangeImage(e, 2)} />
					</div>
					<div className='w-44 h-44'>
						<ImageInput id='image3' imageUrl={imageUrls[3]} onChange={(e) => handleChangeImage(e, 3)} />
					</div>
				</div>

				<div className='grid grid-cols-3 gap-8'>
					<TextInput placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} />

					<TextInput placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

					<Select options={genderOptions} placeholder='Gênero' hidePlaceholder value={gender} onChange={(e) => setGender(e.target.value)} />
				</div>

				<div className='grid grid-cols-4 gap-8'>

					<TextInput type='date' placeholder='Nascimento' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />

					<Select options={colleges.map(college => ({value: college.id, label: `${college.shortName} - ${college.fullName}`}))}
						placeholder='Universidade (opicional)' value={collegeId} onChange={(e) => setCollegeId(e.target.value)} />

					<Select options={courses.map(course => ({value: course.id, label: course.name}))}
						placeholder='Curso (opicional)' disabled={isDisabledCourses} value={courseId} onChange={(e) => setCourseId(e.target.value)} />

					<Select options={professions.map(profession => ({value: profession.id, label: profession.name}))}
						placeholder='Profissão (opicional)' value={professionId} onChange={(e) => setProfessionId(e.target.value)} />
				</div>

				<div className='grid grid-cols-2 gap-8'>
					<TextArea placeholder='Descrição (opicional)' value={description} limit={500} onChange={(e) => setDescription(e.target.value)} />

					<MultipleSelect options={interests.map(interest => ({value: interest.id.toString(), label: interest.name}))}
						placeholder='Interesses (opicional)' values={interestIds} limit={12} onAddClick={(value) => addInterestId(value)} onRemoveClick={(value) => removeInterestId(value)} />
				</div>

				<div className='grid grid-cols-2 gap-8'>
					<TextInput type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />

					<TextInput type='password' placeholder='Repetir senha' value={passwordCopy} onChange={e => setPasswordCopy(e.target.value)} />
				</div>

				<div className='flex justify-center'>
					<Button className='bg-red-light dark:bg-purple rounded-lg w-72 p-2' onClick={save}>Salvar</Button>
				</div>
			</div>
		</main>
	)
}

export default NewUserPage