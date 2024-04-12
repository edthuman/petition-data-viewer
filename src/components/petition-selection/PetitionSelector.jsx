import axios from "axios"
import { useState } from "react"
import PetitionDetails from "./PetitionDetails"

function PetitionSelector({petitionData, setPetitionData}) {
    const [inputID, setInputID] = useState("")
    const [isPetitionDataLoading, setIsPetitionDataLoading] = useState(false)
    const [isPetitionDataFound, setIsPetitionDataFound] = useState(false)
    const [isIDError, setIsIDError] = useState(false)
    const [searchedID, setSearchedID] = useState(0)

    function handlePetitonIDInput(e) {
        const input = parseInt(e.target.value)

        if (typeof input === "number" && !isNaN(input)) {
            setInputID(input)
        } else if (e.target.value === "") {
            setInputID("")
        }
    }

    function handlePetitionIDSubmit(e) {
        e.preventDefault()
        const idSearched = e.target[0].value
        setSearchedID(idSearched)
        setIsPetitionDataLoading(true)

        axios.get(`https://petition.parliament.uk/petitions/${idSearched}.json`)
        .then((response)=>{
            const returnedDetails = response.data.data.attributes
            const petitionObject = {
                title: returnedDetails.action,
                state: returnedDetails.state,
                signatureCount: returnedDetails.signature_count,
                createdAt: returnedDetails.created_at,
                signatureByCountry: returnedDetails.signatures_by_country,
                signatureByConstituency: returnedDetails.signatures_by_consistuency,
                signaturesByRegion: returnedDetails.signatures_by_region
            }
            setPetitionData(petitionObject)
            setIsPetitionDataLoading(false)
            setIsPetitionDataFound(true)
            setIsIDError(false)
        }).catch((err) => {
            setIsIDError(true)
            setIsPetitionDataFound(false)
        })
    }
    
    return <>
        <form onSubmit={handlePetitionIDSubmit}>
            <label>Petition ID Number:
                <input type="text" onChange={handlePetitonIDInput} value={inputID}></input>
            </label>
            <button>Find petition</button>
        </form>
        {isIDError ? (searchedID === "" ? <p>Please input an ID</p>: <p>Error finding petition, please check {searchedID} is the correct ID and try again</p>) : (
            isPetitionDataLoading ? <p>Finding petition...</p> : (isPetitionDataFound ? <PetitionDetails petitionData={petitionData}/> : null))}
    </>
}

export default PetitionSelector