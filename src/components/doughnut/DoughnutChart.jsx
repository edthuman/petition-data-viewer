import { Doughnut } from "react-chartjs-2"

function DoughnutChart({petitionData, selectedScope}) {
    const allScopeData = []
    const labels = []
    const signaturesPerLabel = []
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
            display: false,
        }
    },
    }

    const data = {
        labels,
        datasets: [
        {
          data: signaturesPerLabel,
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(53, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(75, 192, 192)",
            "rgba(153, 102, 255)",
            "rgba(255, 159, 64)",
          ],
          borderWidth: 0,
        },
        ],
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
    return <Doughnut data={data} options={options}/>
}

export default DoughnutChart