function PetitionDetails({petitionData}) {
    
    return <>
        <p>Petition found:</p>
        <em>{petitionData.title}</em>
        <p>Not the petition you expected? Please double-check the ID number and try searching again</p>
    </>
}

export default PetitionDetails