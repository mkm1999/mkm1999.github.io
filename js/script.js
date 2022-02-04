
const ctx = document.getElementById('first-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 17, 3],
            backgroundColor:'#fff',
            borderColor: "#fff",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           yAxis : {
               display : false
           },
           xAxis : {
               display : false
           }  
        },
        plugins : {
            legend : {
                display : false
            }
        }
    }
});

const ctx2 = document.getElementById('second-chart').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 17, 3],
            backgroundColor:'#fff',
            borderColor: "#fff",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           yAxis : {
               display : false
           },
           xAxis : {
               display : false
           }  
        },
        plugins : {
            legend : {
                display : false
            }
        }
    }
});

const ctx3 = document.getElementById('third-chart').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 17, 3],
            backgroundColor:'#fff',
            borderColor: "#fff",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           yAxis : {
               display : false
           },
           xAxis : {
               display : false
           }  
        },
        plugins : {
            legend : {
                display : false
            }
        }
    }
});

const ctx4 = document.getElementById('fourth-chart').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 17, 3],
            backgroundColor:'#fff',
            borderColor: "#fff",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           yAxis : {
               display : false
           },
           xAxis : {
               display : false
           }  
        },
        plugins : {
            legend : {
                display : false
            }
        }
    }
});

const ctx5 = document.getElementById('five-chart').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنحشنبه' , 'جمعه'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 17, 3 , 5],
            backgroundColor:'black',
            borderColor: "#black",
            borderWidth: 1
        }]
    },
    options: {
        plugins : {
            legend : {
                display : false
            }
        }
    }
});

let main = document.querySelector("#main");
let list_icon = document.querySelector(".bi-list");

list_icon.addEventListener("click",() => {
    if(main.classList.contains("col-md-8")){
        main.classList.remove("col-md-8");
        main.classList.remove("col-xl-10");
    }else{
        main.classList.add("col-md-8");
        main.classList.add("col-xl-10");
    }
})


