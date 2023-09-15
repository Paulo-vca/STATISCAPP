

// global vars
let headers, columns, selectedGraph;

function showStage(num) {
    $('.stage').hide()
    $(`.stage:eq(${num})`).show()
}

function nextStage(num) {
    showStage(num)

    if (num % 2 != 0) {
        setTimeout(() => {
            nextStage(num+1)
        }, 1e3*0)
    }
}

function uploadCSV(event) {
    if (!event.target.files[0]) {
        return
    }
    nextStage(1)

    const reader = new FileReader();
    reader.onload = e => {
        const text = e.target.result;
        const rawContent = text;
        const lines = rawContent.split('\n');
        headers = lines[0].split(',');
        columns = lines.filter((e, i) => i !== 0).map(e => e.split(','))

        // filtering headers with non-int columns
        const filteredHeaders = headers.map((e, i) => ({name: e, index: i})).filter((header, index) => {
            return !isNaN(columns[0][index])
        });

        $('#columns-table thead tr').html(filteredHeaders.map(e => `<th>${e.name}</th>`).join(''))
        $('#columns-table tbody tr:last-child').html(filteredHeaders.map(e => `
            <td>
                <button type="button" class="btn btn-primary" onclick="generateGraphs(${e.index})">Gerar grafico desta coluna</button>
            </td>
        `).join(''))
    };
    reader.readAsText(event.target.files[0]);
}

function selectGraph(graph) {
    selectedGraph = graph
    nextStage(3)
}

function generateGraphs(selectedColumn) {
    nextStage(5)
    
    $('#canvas-container').html('<canvas id="chart"></canvas>')
    const ctx = document.getElementById('chart');

    const values = columns.map(e => parseFloat(e[selectedColumn]))
    const data = [
        findAVG(values),
        findMode(values),
        findMedian(values),
        findStandardDeviation(values),
        findVariance(values),
    ]

    const currentChart = charts[selectedGraph]
    currentChart.data.datasets[0].data = data

    new Chart(ctx, currentChart)
}

function findAVG(values) {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function findMode(values) {
    let frequency = {};

    for (let i = 0; i < values.length; i++) {
      const num = values[i];
      if (frequency[num]) {
        frequency[num]++;
      } else {
        frequency[num] = 1;
      }
    }
  
    let moda;
    let maxFrequency = 0;
  
    for (const num in frequency) {
      if (frequency[num] > maxFrequency) {
        moda = num;
        maxFrequency = frequency[num];
      }
    }
  
    return moda;
}

function findMedian(values) {
    const mid = Math.floor(values.length / 2), nums = [...values].sort((a, b) => a - b);

    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function findStandardDeviation(values) {
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    
    const squaredDifferences = values.map(value => Math.pow(value - mean, 2));
    
    const squaredDifferencesMean = squaredDifferences.reduce((sum, value) => sum + value, 0) / squaredDifferences.length;
    
    const standardDeviation = Math.sqrt(squaredDifferencesMean);
    
    return standardDeviation;
}

function findVariance(values) {
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    
    const squaredDifferences = values.map(value => Math.pow(value - mean, 2));
    
    const variance = squaredDifferences.reduce((sum, value) => sum + value, 0) / values.length;

    debugger
    return variance;
}

function resetApp() {
    $('#csvFile').val('')
    headers = []
    columns = []
    selectedGraph = null
    nextStage(0)
}

function importData() {
    const canvas = document.getElementById('chart');

    if (!canvas) {
      console.error(`Elemento canvas com ID 'chart' não encontrado.`);
      return;
    }
  
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'dados';
    link.click();

    nextStage(0)
}


$(document).ready(() =>{
    resetApp()

    const root = $('#demo-chart-container');
    Object.keys(charts).forEach((e, i) => {
        root.append(`
            <div class="col-6 p-3 btn">
                <div class="card">
                    <div class="card-body" onclick="selectGraph('${e}')">
                        <h3>Gráfico ${e}</h3>
                        <p>Descrição do grafico</p>
                        <canvas id="demo-chart-${i}"></canvas>
                    </div>
                </div>
            </div>
        `)

        const ctx = document.getElementById(`demo-chart-${i}`);
        new Chart(ctx, charts[e]);                
    });
})