
function showStage(num) {
    $('.stage').hide()
    $(`.stage:eq(${num})`).show()
}

function nextStage(num) {

    showStage(num)
    switch (num) {
        case 1:
        case 3:
            setTimeout(() => {
                nextStage(num+1)
            }, 3e3)
        break;
    }
}

window.onload = () => {
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