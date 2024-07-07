import GenerateButton from './generateButton'
import iconPath from './../assets/copyIcon.svg'
import './symbolSide.css'
import { ChangeEvent, useState } from 'react'
import { usePassword } from './../Providers/passwordContext'
import CustomAlert from './customAlert'

function SymbolSide(): JSX.Element {
  const {
    sliderValue,
    setSliderValue,
    isSymbolSelected,
    setIsSymbolSelected,
    isCapsSelected,
    setIsCapsSelected,
    generatePassword,
    password
  } = usePassword()

  const [alertVisible, setAlertVisible] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>('')

  setTimeout(() => {
    if (alertVisible) {
      setAlertVisible(false)
    }
  }, 2500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value)
    setSliderValue(newValue)
  }

  const toggleSymbol = () => setIsSymbolSelected(!isSymbolSelected)
  const toggleCaps = () => setIsCapsSelected(!isCapsSelected)

  const generateNewPassword = () => {
    generatePassword(sliderValue, isSymbolSelected, isCapsSelected)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setAlertMessage('Contraseña copiada al portapapeles')
      setAlertVisible(true)
    })
  }

  return (
    <>
      <div className="rightSide">
        <div className="mainSquare">
          <div className="secondSquare"></div>
          <div className="firstSquare">
            <div className="outputPassword">{password}</div>
            <GenerateButton title="Generate New" id="btnName" onClick={generateNewPassword} />
          </div>
        </div>

        <div className="copyPass">
          <p className="copyPassLetter"> Copy your Password</p>
          <img src={iconPath} alt="Icon" className="iconCopy" onClick={copyToClipboard} />
        </div>

        <div className="sliderBox">
          <div className="infoSlider">
            <p className="nameLenght">Lenght</p>
            <p className="sliderValue">{sliderValue}</p>
          </div>

          <input
            type="range"
            className="slider"
            id="slider"
            min={4}
            max={14}
            defaultValue={sliderValue}
            onChange={handleChange}
          />
        </div>
        <div className="checkBoxContainer">
          <div className="checkBoxSymbol">
            <label className="checkBoxName">Symbol</label>
            <input
              type="checkbox"
              id="checkSymbol"
              checked={isSymbolSelected}
              onChange={toggleSymbol}
            />
          </div>
          <div className="checkBoxCaps">
            <label className="checkBoxName">Caps</label>
            <input type="checkbox" id="checkCaps" checked={isCapsSelected} onChange={toggleCaps} />
          </div>
        </div>
        {alertVisible && <CustomAlert message={alertMessage} />}
      </div>
    </>
  )
}

export default SymbolSide
