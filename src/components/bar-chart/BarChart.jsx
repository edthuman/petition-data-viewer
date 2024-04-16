import { Bar } from 'react-chartjs-2';

function BarChart({labels, signaturesPerLabel}) {
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

    return <Bar options={options} data={data}/>
}

export default BarChart