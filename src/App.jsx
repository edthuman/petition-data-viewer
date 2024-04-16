import { useState } from 'react'
import './App.css'
import PetitionSelector from './components/petition-selection/PetitionSelector'
import { registerCharts } from '../registerCharts.ts'
import ScopeSelector from './components/scope-selection/ScopeSelector.jsx'
import ChartSelector from './components/chart-selection/ChartSelector.jsx'
import ChartArea from './components/chart-area/ChartArea.jsx'


registerCharts();

function App() {
  const [petitionData, setPetitionData] = useState({})
  const [selectedScope, setSelectedScope] = useState("world")
  const [selectedChart, setSelectedChart] = useState("bar")

  return (
    <>
      <h1>Petition Data Viewer</h1>
      <PetitionSelector petitionData={petitionData} setPetitionData={setPetitionData}/>
      <ScopeSelector selectedScope={selectedScope} setSelectedScope={setSelectedScope}/>
      <ChartSelector selectedChart={selectedChart} setSelectedChart={setSelectedChart}/>
      {Object.keys(petitionData).length ? <ChartArea petitionData={petitionData} selectedScope={selectedScope} selectedChart={selectedChart}/> : null}
    </>
  )
}

export default App
