import { Bar } from 'react-chartjs-2';

function BarChart({petitionData, selectedScope}) {
    const allScopeData = []
    const labels = []
    const signaturesPerLabel = []
    const options = {
        plugins: {
            legend: {
            display: false,
        }
    },
        scales: {
          x:{
                display: false,
        },
      }
    }
    const data = {
        labels,
        datasets: [
        {
          data: signaturesPerLabel,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        ]
    }
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
            <p>Highlight over the bars to see which {selectedScope === "world" ? "country" : (selectedScope === "uk-regions" ? "region" : "constituency")} they are for</p>
            <Bar options={options} data={data}/>
        </>) : <p>Signature counts by location are unavailable for this petition, it had {petitionData.signatureCount} signatures in total</p>}
    </>
}

export default BarChart