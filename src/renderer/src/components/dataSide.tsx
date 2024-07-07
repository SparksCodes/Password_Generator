import './dataSide.css'
import InputData from './inputData'
import KeepButton from './keepButton'
import { useData } from '../Providers/dataContext'

function DataSide(): JSX.Element {
  const { app, user, password, url } = useData()

  const handleKeepPassword = () => {
    const data = {
      app,
      user,
      password,
      url
    }

    const dataStr = JSON.stringify(data, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const urls = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = urls
    a.download = 'data.json'
    a.click()

    URL.revokeObjectURL(urls)
  }

  return (
    <div className="leftSide">
      <div className="title">
        <h1 className="mainTitle">Password Generator</h1>
      </div>
      <div className="allInputs">
        <InputData title="App" id="appName" />
        <InputData title="User" id="userName" />
        <InputData title="Password" id="psw" />
        <InputData title="URL" id="urlName" />
      </div>
      <div className="mainButton">
        <KeepButton title="Keep it!" id="btnName" onClick={handleKeepPassword} />
      </div>
    </div>
  )
}

export default DataSide
