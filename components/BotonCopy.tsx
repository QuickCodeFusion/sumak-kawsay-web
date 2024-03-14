'use client'
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { ButtonUI } from './ui/button'

const ButtonCopy = ({ text, children }: { text: string, children: React.ReactNode }): JSX.Element => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      toast.info('Copied')
      setCopied(false)
    }
  }, [copied])

  const handleCopy = (): void => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true)
      })
      .catch(err => {
        console.error('Error al copiar texto:', err)
      })
  }

  return (
    <ButtonUI variant="ghost" onClick={handleCopy}>
        {children}
    </ButtonUI>
  )
}

export default ButtonCopy
