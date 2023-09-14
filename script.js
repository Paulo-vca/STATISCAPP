

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
        }, 2e3)
    }
}

function uploadCSV(event) {
    nextStage(1)
    file = event.target.files[0]

    const reader = new FileReader();
    reader.onload = function (e) {
       const text = e.target.result;
       rawContent = text;
       lines = rawContent.split('\r\n');
       headers = lines[0].split(';');
       columns = lines.filter((e, i) => i !== 0).map(e => e.split(';'))

        $('#columns-table thead tr').html(headers.map(e => `<th>${e}</th>`).join(''))
        $('#columns-table tbody tr:last-child').html(headers.map((e, i) => `
            <td>
                <button type="button" class="btn btn-primary" onclick="selectColumn(${i})">Gerar grafico desta coluna</button>
            </td>
        `).join(''))

    };
    reader.readAsText(file);
}

function selectGraph(graph) {
    selectedGraph = graph
    nextStage(3)
}

function selectColumn(column) {
    selectedColumn = column
    nextStage(5)
}

function resetApp() {
    $('#csvFile').val()
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