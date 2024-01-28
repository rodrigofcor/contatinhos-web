'use client'

import React, { ReactNode } from 'react'

interface ModalProps {
	isOpen?: boolean
	title?: string
	onCloseClick?: (event: React.MouseEvent<HTMLSpanElement> ) => void
  className?: string
  children?: ReactNode
}

const Modal: React.FC<ModalProps> = ({isOpen=false, title, onCloseClick, className, children}) => {
	return isOpen ? (
		<div className='fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50'>
			<dialog open className={`${className} shadow-2xl bg-white dark:bg-brown-3 dark:text-white rounded-lg z-50`}>
				{title && title !== '' && (
					<div className='w-full flex items-center border-b-2 border-pink-3 dark:border-brown-2 px-4 py-2'>
						<div className='w-[90%] flex flex-col items-start mt-1'>
							<h3 className='text-lg font-bold'>{title}</h3>
						</div>

						{onCloseClick && (
							<div className='w-[10%] flex flex-col items-end'>
								<span className='text-2xl text-red-light cursor-pointer hover:opacity-60' onClick={onCloseClick}>&times;</span>
							</div>
						)}
					</div>
				)}

				<div className='flex w-full items-center justify-center p-4'>
					{children}
				</div>
			</dialog>
		</div>
	) : null
}

export default Modal
