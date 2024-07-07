import React, { createContext, useState, useContext, ReactNode } from 'react'

// Definimos la estructura del contexto

interface PasswordContextProps {
  password: string
  generatePassword: (length: number, includeSymbols: boolean, includeCaps: boolean) => void
  sliderValue: number
  setSliderValue: (value: number) => void
  isSymbolSelected: boolean
  setIsSymbolSelected: (value: boolean) => void
  isCapsSelected: boolean
  setIsCapsSelected: (value: boolean) => void
}

// Se inicializan los valores del contexto

const defaultContextValue: PasswordContextProps = {
  password: '',
  generatePassword: () => {},
  sliderValue: 12,
  setSliderValue: () => {},
  isSymbolSelected: false,
  setIsSymbolSelected: () => {},
  isCapsSelected: false,
  setIsCapsSelected: () => {}
}

// Se crea el contexto

const PasswordContext = createContext<PasswordContextProps>(defaultContextValue)

// Provider del contexto

export const PasswordProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState<string>('')
  const [sliderValue, setSliderValue] = useState<number>(6)
  const [isSymbolSelected, setIsSymbolSelected] = useState<boolean>(false)
  const [isCapsSelected, setIsCapsSelected] = useState<boolean>(false)

  // Aquí se podrían poner todas las funciones necesarias, como en este caso para generar la contraseña.

  const generatePassword = (length: number, includeSymbols: boolean, includeCaps: boolean) => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_-+={}[];:<>,.?/~'

    let allCharacters = lowerCaseLetters + numbers
    if (includeCaps) allCharacters += upperCaseLetters
    if (includeSymbols) allCharacters += symbols

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length)
      generatedPassword += allCharacters[randomIndex]
    }

    setPassword(generatedPassword)
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
        generatePassword,
        sliderValue,
        setSliderValue,
        isSymbolSelected,
        setIsSymbolSelected,
        isCapsSelected,
        setIsCapsSelected
      }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

// Hook para poder usar el contexto

export const usePassword = () => useContext(PasswordContext)
