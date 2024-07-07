import { DataProvider } from './Providers/dataContext'
import DataSide from './components/dataSide'
import SymbolSide from './components/symbolSide'

function App(): JSX.Element {
  return (
    <>
      <DataProvider>
        <section className="general">
          <DataSide />
          <SymbolSide />
        </section>
      </DataProvider>
    </>
  )
}

export default App
