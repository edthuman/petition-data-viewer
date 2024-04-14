import { useState } from 'react'
import './App.css'
import PetitionSelector from './components/petition-selection/PetitionSelector'
import BarChart from './components/bar-chart/BarChart'
import { registerCharts } from '../registerCharts.ts'
import ScopeSelector from './components/scope-selection/ScopeSelector.jsx'
import DoughnutChart from './components/doughnut/DoughnutChart.jsx'


registerCharts();

function App() {
  const [petitionData, setPetitionData] = useState({})
  const [selectedScope, setSelectedScope] = useState("world")

  return (
    <>
      <h1>Petition Data Viewer</h1>
      <PetitionSelector petitionData={petitionData} setPetitionData={setPetitionData}/>
      <ScopeSelector selectedScope={selectedScope} setSelectedScope={setSelectedScope}/>
      {Object.keys(petitionData).length ? <><BarChart petitionData={petitionData} selectedScope={selectedScope}/><DoughnutChart petitionData={petitionData} selectedScope={selectedScope}/></> : null}
    </>
  )
}

export default App
