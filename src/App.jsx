import { useState } from 'react'
import './App.css'
import PetitionSelector from './components/petition-selection/PetitionSelector'
import BarChart from './components/bar-chart/BarChart'
import { registerCharts } from '../registerCharts.ts'

registerCharts();

function App() {
  const [petitionData, setPetitionData] = useState({})

  return (
    <>
      <h1>Petition Data Viewer</h1>
      <PetitionSelector petitionData={petitionData} setPetitionData={setPetitionData}/>
      {Object.keys(petitionData).length ? <BarChart petitionData={petitionData}/> : null}
    </>
  )
}

export default App
