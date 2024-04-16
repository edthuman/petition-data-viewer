import { PolarArea } from "react-chartjs-2";

function PolarAreaChart({petitionData, selectedScope}) {
    const allScopeData = []
    const labels = []
    const signaturesPerLabel = []
    let ukSignatureCount = 0
    const options = {
        plugins: {
            legend: {
            display: false,
            }
        }
    }
    const data = {
        labels,
        datasets: [
        {
          data: signaturesPerLabel,
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
          ],
          borderWidth: 0,
        },
        ]
    }
    
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
    return <PolarArea options={options} data={data}/>
}

export default PolarAreaChart