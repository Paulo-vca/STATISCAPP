

const labels = ['Média', 'Moda', 'Mediana', 'Desvio padrão', 'Variância'];
const demoData = [11, 5, 13, 14, 8];
const demoData2 = [14, 10, 8, 14, 6];

const charts = {
    horizontalBar: {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: "Nome do grafico",
                data: demoData,
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
    },
    FloatingBar: {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: demoData,
              },
              {
                label: 'Dataset 2',
                data: demoData2,
              },
            ]
          },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Floating Bar Chart'
            }
          }
        }
      },
    StackedBar: {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                  label: 'Dataset 1',
                  data: demoData,
                },
                {
                  label: 'Dataset 2',
                  data: demoData2,
                },
            ]
          },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked'
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    },
    Line: {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: demoData,
                }
            ]
            },
        options: {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
            }
        },
    },
    PointStyling: {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                label: 'Dataset',
                data: demoData,
                pointStyle: 'circle',
                pointRadius: 10,
                pointHoverRadius: 15
                }
            ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
            }
          }
        }
    },
}