import React, { ChangeEvent } from 'react'
import './inputData.css'
import { useData } from '../Providers/dataContext'

interface ValueData {
  title: string
  id: string
}

const InputData: React.FC<ValueData> = ({ title, id }) => {
  const { app, user, password, url, setApp, setUser, setPassword, setUrl } = useData()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    switch (id) {
      case 'appName':
        setApp(value)
        break
      case 'userName':
        setUser(value)
        break
      case 'psw':
        setPassword(value)
        break
      case 'urlName':
        setUrl(value)
        break
    }
  }

  const getValue = () => {
    switch (id) {
      case 'appName':
        return app
      case 'userName':
        return user
      case 'psw':
        return password
      case 'urlName':
        return url
      default:
        return ''
    }
  }

  return (
    <div className="rowData">
      <h2 className="titleData">{title}</h2>
      <input className="inputData" type="text" id={id} value={getValue()} onChange={handleChange} />
    </div>
  )
}

export default InputData
