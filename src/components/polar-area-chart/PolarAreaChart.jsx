import { PolarArea } from "react-chartjs-2";

function PolarAreaChart({labels, signaturesPerLabel}) {
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
    
    return <PolarArea data={data} options={options}/>
}

export default PolarAreaChart