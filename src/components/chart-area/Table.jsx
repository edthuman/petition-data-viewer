import './Table.css'

function Table({ukSignatureCount, labels, signaturesPerLabel, selectedScope}) {
    const allCountryLabels = [...labels]
    const allCountrySignatures = [...signaturesPerLabel]
    if (selectedScope === "world") {
        allCountryLabels.unshift("United Kingdom")
        allCountrySignatures.unshift(ukSignatureCount)
    }

    return <table>
        <tbody>
        <tr>
            <th>{selectedScope === "world" ? "Country" : (selectedScope === "uk-regions" ? "Region" : "Constituency")}</th>
            <th>Number of Signatures</th>
        </tr>
        {allCountryLabels.map((country, index) => <tr key={index}><td className="row-name">{country}</td><td className="row-signatures">{allCountrySignatures[index]}</td></tr>)}
        </tbody>
    </table>
}

export default Table