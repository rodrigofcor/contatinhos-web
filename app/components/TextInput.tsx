'use client'

import React from 'react'

interface TextInputProps {
  type?: 'text' | 'email' | 'date' | 'password'
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> =({ type = 'text', placeholder, value, onChange }) => {
  return (
    <>
      <input className='' type={type} value={value} onChange={onChange} />
    </>
  )
}

export default TextInput
