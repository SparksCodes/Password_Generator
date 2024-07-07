import './generateButton.css'

type PropButton = {
  title: string
  id: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

function GenerateButton({ title, id, onClick }: PropButton): JSX.Element {
  return (
    <>
      <div className="mainContainerGenerate" id={id} onClick={onClick}>
        <div className="buttonNameGenerate">
          <p className="mainTitleButtonGenerate">{title}</p>
        </div>
      </div>
    </>
  )
}

export default GenerateButton