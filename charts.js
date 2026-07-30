// Analytics Charts using Chart.js

document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
});

function initializeCharts() {
    createVulnerabilityChart();
    createPopulationChart();
    createFrequencyChart();
    createEconomicChart();
}

// Chart 1: Vulnerability Index by Region
function createVulnerabilityChart() {
    const ctx = document.getElementById('vulnerability-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Gulf Coast', 'Atlantic Coast', 'Pacific Coast', 'Caribbean', 'Small Islands', 'Southeast Asia'],
            datasets: [{
                label: 'Average Vulnerability Index',
                data: [0.76, 0.72, 0.48, 0.87, 0.93, 0.85],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(249, 115, 22, 0.7)',
                    'rgba(234, 179, 8, 0.7)',
                    'rgba(220, 38, 38, 0.7)',
                    'rgba(185, 28, 28, 0.7)',
                    'rgba(239, 68, 68, 0.7)'
                ],
                borderColor: [
                    'rgb(220, 38, 38)',
                    'rgb(234, 88, 12)',
                    'rgb(202, 138, 4)',
                    'rgb(185, 28, 28)',
                    'rgb(153, 27, 27)',
                    'rgb(220, 38, 38)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y.toFixed(2);
                            
                            // Add risk level
                            const value = context.parsed.y;
                            let risk = '';
                            if (value >= 0.85) risk = ' (Extreme Risk)';
                            else if (value >= 0.70) risk = ' (High Risk)';
                            else if (value >= 0.55) risk = ' (Moderate Risk)';
                            else risk = ' (Low Risk)';
                            
                            return label + risk;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1.0,
                    ticks: {
                        callback: function(value) {
                            return value.toFixed(1);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Vulnerability Index (0-1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Coastal Region'
                    }
                }
            }
        }
    });
}

// Chart 2: Population Exposure Over Time
function createPopulationChart() {
    const ctx = document.getElementById('population-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2025', '2030', '2035', '2040'],
            datasets: [
                {
                    label: 'Low Elevation Coastal Zone (LECZ)',
                    data: [625, 698, 782, 856, 945, 1038, 1142, 1258, 1385],
                    borderColor: 'rgb(14, 165, 233)',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'High Risk Areas',
                    data: [187, 215, 248, 285, 328, 378, 435, 501, 576],
                    borderColor: 'rgb(239, 68, 68)',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Extreme Risk Areas',
                    data: [42, 51, 63, 78, 96, 118, 145, 178, 218],
                    borderColor: 'rgb(153, 27, 27)',
                    backgroundColor: 'rgba(153, 27, 27, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y + ' million people';
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Population (Millions)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

// Chart 3: Historical Storm Surge Events
function createFrequencyChart() {
    const ctx = document.getElementById('frequency-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [
                {
                    label: 'Category 3+',
                    data: [3, 2, 5, 4, 2, 3, 4, 7, 5, 6, 8, 5, 7, 6, 8, 9],
                    backgroundColor: 'rgba(239, 68, 68, 0.7)',
                    borderColor: 'rgb(220, 38, 38)',
                    borderWidth: 1
                },
                {
                    label: 'Category 1-2',
                    data: [8, 6, 9, 7, 5, 8, 9, 11, 10, 12, 14, 11, 13, 12, 15, 16],
                    backgroundColor: 'rgba(249, 115, 22, 0.7)',
                    borderColor: 'rgb(234, 88, 12)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.parsed.y + ' events';
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Events'
                    },
                    stacked: true
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    },
                    stacked: true
                }
            }
        }
    });
}

// Chart 4: Economic Impact Projections
function createEconomicChart() {
    const ctx = document.getElementById('economic-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2025', '2030', '2035', '2040', '2045', '2050', '2060', '2070', '2080', '2090', '2100'],
            datasets: [
                {
                    label: 'High Emissions Scenario (RCP 8.5)',
                    data: [52, 68, 89, 118, 156, 208, 325, 485, 698, 982, 1356],
                    borderColor: 'rgb(220, 38, 38)',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3
                },
                {
                    label: 'Moderate Emissions (RCP 4.5)',
                    data: [52, 65, 82, 103, 128, 158, 228, 318, 428, 562, 725],
                    borderColor: 'rgb(249, 115, 22)',
                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                },
                {
                    label: 'Low Emissions (RCP 2.6)',
                    data: [52, 63, 76, 89, 103, 118, 145, 175, 208, 245, 285],
                    borderColor: 'rgb(34, 197, 94)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += '$' + context.parsed.y + ' billion';
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Annual Damage Cost (USD Billions)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            }
        }
    });
}

// Additional utility functions for chart interactions

function updateChartData(chartId, newData) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        chart.data.datasets[0].data = newData;
        chart.update();
    }
}

function exportChartImage(chartId) {
    const chart = Chart.getChart(chartId);
    if (chart) {
        const url = chart.toBase64Image();
        const link = document.createElement('a');
        link.href = url;
        link.download = `${chartId}_export.png`;
        link.click();
    }
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const chartObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all chart containers
document.querySelectorAll('canvas').forEach(canvas => {
    chartObserver.observe(canvas.parentElement);
});