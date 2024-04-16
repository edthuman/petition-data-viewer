import BarChart from "./BarChart"
import DoughnutChart from "./DoughnutChart"
import PolarAreaChart from "./PolarAreaChart"

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

    return <>
        {allScopeData.length ? (<>
            {selectedScope === "world" ? <p>The United Kingdom has been excluded from the data, it had {ukSignatureCount} signatures</p> : null}
            <p>Highlight over the {selectedChart === "bar" ? "bars" : "segments"} to see which {selectedScope === "world" ? "country" : (selectedScope === "uk-regions" ? "region" : "constituency")} they are for</p>
            {selectedChart === "bar" ? <BarChart labels={labels} signaturesPerLabel={signaturesPerLabel}/> : (
             selectedChart === "doughnut" ? <DoughnutChart labels={labels} signaturesPerLabel={signaturesPerLabel}/> : (
            <PolarAreaChart labels={labels} signaturesPerLabel={signaturesPerLabel}/>))}
        </>) : <p>Signature counts by location are unavailable for this petition, it had {petitionData.signatureCount} signatures in total</p>}
    </>
}

export default ChartArea