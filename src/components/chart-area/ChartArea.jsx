import BarChart from "./BarChart"
import DoughnutChart from "./DoughnutChart"
import PolarAreaChart from "./PolarAreaChart"
import Table from "./Table"
import "./ChartArea.css"

function ChartArea({petitionData, selectedScope, selectedChart}) {
    const allScopeData = []
    const labels = []
    const signaturesPerLabel = []
    let ukSignatureCount = 0
    
    if (selectedScope === "world") {
        allScopeData.push(...petitionData.signaturesByCountry)
    } else if (selectedScope === "uk-regions") {
        allScopeData.push(...petitionData.signaturesByRegion)
    } else {
        allScopeData.push(...petitionData.signaturesByConstituency)
    }

    for (let i = 0; i < allScopeData.length; i++) {
        if(allScopeData[i].name !== "United Kingdom") {
        labels.push(allScopeData[i].name)
        signaturesPerLabel.push(allScopeData[i].signature_count)
        } else ukSignatureCount += allScopeData[i].signature_count
    }

    return <figure>
        {allScopeData.length ? (<>
            {selectedChart === "table" ? <Table ukSignatureCount={ukSignatureCount} labels={labels} signaturesPerLabel={signaturesPerLabel} selectedScope={selectedScope}/> : (<>
                {selectedChart === "bar" ? <BarChart labels={labels} signaturesPerLabel={signaturesPerLabel}/> : (
                 selectedChart === "doughnut" ? <DoughnutChart labels={labels} signaturesPerLabel={signaturesPerLabel}/> : (
                selectedChart === "polar" ? <PolarAreaChart labels={labels} signaturesPerLabel={signaturesPerLabel}/> : null))}
            </>)}
        </>) : <p>Signature counts by location are unavailable for this petition, it had {petitionData.signatureCount} signatures in total</p>}
        <figcaption>
            Number of signatures from each {selectedScope === "world" ? "country" : (selectedScope === "uk-regions" ? "UK region" : "UK constituency")} for the petition "{petitionData.title}"
            {selectedChart !== "table" ? (<>
                <br/>
                {selectedScope === "world" ? <>{`The United Kingdom has been excluded from the data, it had ${ukSignatureCount} signatures.`}<br/></> : null}
                Highlight over the {selectedChart === "bar" ? "bars" : "segments"} to see which {selectedScope === "world" ? "country" : (selectedScope === "uk-regions" ? "region" : "constituency")} they are for.
            </>) : null}
        </figcaption>
    </figure>
}

export default ChartArea