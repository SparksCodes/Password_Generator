import './keepButton.css'

type PropButton = {
  title: string
  id: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

function KeepButton({ title, id, onClick }: PropButton): JSX.Element {
  return (
    <>
      <div className="mainContainer" id={id} onClick={onClick}>
        <div className="buttonName">
          <p className="mainTitleButton">{title}</p>
        </div>
      </div>
    </>
  )
}

export default KeepButton
