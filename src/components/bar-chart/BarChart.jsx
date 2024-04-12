import { Bar } from 'react-chartjs-2';


function BarChart({petitionData}) {
    const allCountryData = petitionData.signaturesByCountry
    const labels = []
    const signaturesPerCountry = []
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
          data: signaturesPerCountry,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        ]
    }
    let ukSignatureCount = 0

    for (let i = 0; i < allCountryData.length; i++) {
        if(allCountryData[i].name !== "United Kingdom") {
        labels.push(allCountryData[i].name)
        signaturesPerCountry.push(allCountryData[i].signature_count)
        } else ukSignatureCount += allCountryData[i].signature_count
    }

    return <>
        {allCountryData.length ? (<>
            <p>The United Kingdom has been excluded from the data, it had {ukSignatureCount} signatures</p>
            <p>Highlight over the bars to see which country they are for</p>
            <Bar options={options} data={data}/>
        </>) : <p>Signature counts by country are unavailable for this petition, it had {petitionData.signatureCount} signatures in total</p>}
    </>
}

export default BarChart