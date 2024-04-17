import './ChartSelector.css'

function ChartSelector({selectedChart, setSelectedChart}) {
    function handleChartSelection(e){
        setSelectedChart(e.target.value)
    }
    
    return <section>
        <h4>Which type of chart did you want to see?</h4>
        <button onClick={handleChartSelection} value="bar" className={selectedChart === "bar" ? "selected" : "deselected"}>Bar Chart</button>
        <button onClick={handleChartSelection} value="doughnut" className={selectedChart === "doughnut" ? "selected" : "deselected"}>Doughnut</button>
        <button onClick={handleChartSelection} value="polar" className={selectedChart === "polar" ? "selected" : "deselected"}>Polar Area Chart</button>
        <button onClick={handleChartSelection} value="table" className={selectedChart === "table" ? "selected" : "deselected"}>Table</button>
    </section>
}

export default ChartSelector