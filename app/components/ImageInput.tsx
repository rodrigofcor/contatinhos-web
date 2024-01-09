'use client'

import React from 'react'

interface ImageInputProps {
  className?: string
  id: string
  imageUrl?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageInput: React.FC<ImageInputProps> =({className, id, imageUrl, onChange }) => {
	return (
		<div className={`${className} w-full h-full border-solid border-2 border-pink-3 dark:border-brown-2 rounded-3xl`}>
			<label htmlFor={id} className='opacity-100 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-50 hover:cursor-pointer'>
				{imageUrl && imageUrl !== '' ? (
					<picture>
						<img className="w-full h-full object-contain rounded-3xl"
							src={imageUrl} alt='Alterar imagem' />
					</picture>
				): (
					<div className='w-full h-full flex justify-center items-center'>
						<picture>
							<img className="w-14 h-14 object-contain rounded-3xl hover:scale-105"
								src='/images/addPhotoIco.svg' alt='Adicionar imagem' />
						</picture>
					</div>
				)}
			</label>

			<input type='file' className='hidden' id={id} accept='image/jpeg, image/png' onChange={(e) => onChange(e)} />
		</div>
	)
}

export default ImageInput
