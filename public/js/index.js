const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');

const city_name = document.getElementById('city_name');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    // alert("Hii");
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Plz enter the city name`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b4606309b1a08c02839d53a5aa56f236`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            temp_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            let tempStatus = arrData[0].weather[0].main;

            if(tempStatus == "Sunny" || tempStatus == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
              }
              else if(tempStatus == "Clouds"){
                temp_status.innerHTML = "<i class=' fa-solid fa-cloud' style='color: #e5e7e9;'></i>"
              }
              else if(tempStatus == "Rainy"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #34495e;'></i>"
              }
              else{
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #e5e7e9;'></i>"
              }

              datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);