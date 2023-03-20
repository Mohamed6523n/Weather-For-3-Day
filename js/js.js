var data = []

let input = document.querySelector('input')

for (let i = 0; i < 1; i++) {
    input.addEventListener('blur', function () {
        var cunt = input.value
        GetCont(cunt)
    })
}


GetCont('cairo')


async function GetCont(cunt) {
    

    let r = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${cunt}&days=3`);
    let x = await r.json()
    data = await x
    // console.log(data.forecast.forecastday[0]);
    display()
}




//===============display=============

function display() {
    cols = ` `
    for (var i = 0; i < 1; i++) {
        cols += `
        
        <div class="col-md-4 item-1  pb-4 rounded rounded-1  mt-5">

        <div class="inner-item-1 main-color  ">
            <p>${data.forecast.forecastday[0].date}</p>
        </div>

        <p class="fw-bolder lead mb-4 ms-4">${data.location.name}</p>
        <h1 class="d-inline me-5 mt-4 ms-2">${data.forecast.forecastday[1].day.avgtemp_c}  <sup>o</sup> C</h1>

        <img src="https:${data.current.condition.icon}" alt="..." width="90">

        <p class="text-primary mt-4 ms-4"> ${data.current.condition.text} </p>

        <div class="fot pt-4 pb-4  ms-4">
            <span>
                <img src="img/icon-umberella.png" alt="..">
                <p class="d-inline">${data.forecast.forecastday[1].day.daily_chance_of_rain}%</p>
            </span>
            <span class="ps-3">
                <img src="img/icon-wind.png" alt="..">

                <p class="d-inline">${data.current.wind_kph} Km/h</p>
            </span>
            <span class="ps-3">
                <img src="img/icon-compass.png" alt="..">
                <p class="d-inline">East</p>
            </span>


        </div>

       
    </div>
    <!--  ================= 2=============== -->

    <div class="col-md-4 item-2 text-center border border-1 border-dark rounded rounded-1  mt-5">
        <div class="inner-item-2 text-center main-color ">
                        <p>${data.forecast.forecastday[1].date}</p>

        </div>

        <img class="ms-4 mb-4" src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="..">
        <h3>${data.forecast.forecastday[1].day.maxtemp_c}  <sup>o</sup> C
        </h3>
        <p> ${data.forecast.forecastday[1].day.mintemp_c}  <sup>o</sup> </p>
        <p class="text-primary">${data.forecast.forecastday[1].day.condition.text}</p>

    </div>

    <!--  ================= 3 =============== -->

    <div class="col-md-4 item-3  pb-4 rounded rounded-1  mt-5">

        <div class="inner-item-3 text-center main-color ">
                        <p>${data.forecast.forecastday[2].date}</p>

        </div>

        <img class="ms-4 mb-4" src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="...">

        <h3>${data.forecast.forecastday[2].day.maxtemp_c}  <sup>o</sup> C
        </h3>
        <p>${data.forecast.forecastday[2].day.mintemp_c}  <sup>o</sup> </p>
        <p class="text-primary">${data.forecast.forecastday[2].day.condition.text}</p>

    </div>

            `
    }
    document.getElementById('dataShow').innerHTML = cols
}










