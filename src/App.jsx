import { useState } from 'react'
import './App.css'
import PetitionSelector from './components/petition-selection/PetitionSelector'

function App() {
  const [petitionData, setPetitionData] = useState({})

  return (
    <>
      <h1>Petition Data Viewer</h1>
      <PetitionSelector petitionData={petitionData} setPetitionData={setPetitionData}/>
    </>
  )
}

export default App
