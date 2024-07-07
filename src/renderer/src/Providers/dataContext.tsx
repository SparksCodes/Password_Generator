import React, { createContext, useContext, useState } from 'react'

interface DataContextType {
  app: string
  user: string
  password: string
  url: string
  setApp: (value: string) => void
  setUser: (value: string) => void
  setPassword: (value: string) => void
  setUrl: (value: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [app, setApp] = useState<string>('')
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  return (
    <DataContext.Provider
      value={{ app, user, password, url, setApp, setUser, setPassword, setUrl }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('Se deben rellenar todos los campos')
  }
  return context
}
