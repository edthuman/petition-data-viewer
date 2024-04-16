import { Doughnut } from "react-chartjs-2"

function DoughnutChart({labels, signaturesPerLabel}) {
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

    return <Doughnut data={data} options={options}/>
}

export default DoughnutChart