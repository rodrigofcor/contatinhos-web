'use client'

import React from 'react'

interface ImageInputProps {
  className?: string
  id: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageInput: React.FC<ImageInputProps> =({className, id, placeholder, value, onChange }) => {
	return (
		<div className={`${className} w-full`}>
			<label htmlFor={id}>
				<picture>
					<img className=" object-cover opacity-100 transition-all duration-300 ease-in-out hover:opacity-50 hover:cursor-pointer rounded-3xl"
						src='https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png' alt='Selecione a imagem' />
				</picture>
			</label>

			<input type='file' className='hidden' id={id} accept='image/jpeg, image/png' />
		</div>
	)
}

export default ImageInput
