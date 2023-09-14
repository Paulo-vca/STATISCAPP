

// global vars
let file, rawContent, lines, headers, columns, selectedGraph, selectedColumn;


function showStage(num) {
    $('.stage').hide()
    $(`.stage:eq(${num})`).show()
}

function nextStage(num) {
    showStage(num)

    if (num % 2 != 0) {
        setTimeout(() => {
            nextStage(num+1)
        }, 3)
    }
}

function uploadCSV(event) {
    nextStage(1)
    file = event.target.files[0]

    const reader = new FileReader();
    reader.onload = function (e) {
       const text = e.target.result;
       rawContent = text;
       lines = rawContent.split('\n');
       headers = lines[0].split(',');
       columns = lines.filter((e, i) => i !== 0).map(e => e.split(','))

        $('#columns-table thead tr').html(headers.map(e => `<th>${e}</th>`).join(''))
        $('#columns-table tbody tr:last-child').html(headers.map((e, i) => `
            <td>
                <button type="button" class="btn btn-primary" onclick="generateGraphs(${i})">Gerar grafico desta coluna</button>
            </td>
        `).join(''))

    };
    reader.readAsText(file);
}

function selectGraph(graph) {
    selectedGraph = graph
    nextStage(3)
}

function generateGraphs(column) {
    selectedColumn = column
    nextStage(5)

    const ctx = document.getElementById('chart');

    const values = columns.map(e => e[selectedColumn])
    const data = [
        findAVG(values),
        findMode(values),
        findMedian(values),
        findStandardDeviation(values),
        findXXX(values),
    ]

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Média', 'Moda', 'Mediana', 'Desvio padrão', 'NN lembro'],
        datasets: [{
            label: '#',
            data,
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
        }
    });
}

function findAVG(values) {
    return values.reduce((total, current) => total + parseFloat(current), 0) / values.length
}

function findMode(values) {
    return 0
}

function findMedian(values) {
    const mid = Math.floor(values.length / 2),
    nums = [...values].sort((a, b) => a - b);
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function findStandardDeviation(values) {
    return 0
}

function findXXX(values) {
    return 0
}

function resetApp() {
    $('#csvFile').val('')
    file = null
    rawContent = ''
    lines = []
    headers = []
    columns = []
    selectedGraph = null
    selectedColumn = null
    nextStage(0)
}

window.onload = () => {
    resetApp()
    for (let index = 1; index < 10; index++) {
        const ctx = document.getElementById('myChart'+index);

        if (!ctx) {
            continue
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true
                }
            }
            }
        });                
    }
}