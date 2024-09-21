const apiKey = "3697a847b1f073662faa4b4f9b0efc59"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const waethericon = document.querySelector(".weather-icon");
let x=document.getElementsByClassName(".input").value;


// if input field empty throw error
function validator(){
    let x=document.querySelector(".search input").value;
    if(x==""){
        alert("Input cannot be Empty");
        return false;
    }
}

// end of empty error

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data =await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/hr";
    if(data.weather[0].main== "Clouds"){
        waethericon.src="images/clouds.png";
    }else if(data.weather[0].main== "Clear")
    {
        waethericon.src="images/clear.png";
    }else if(data.weather[0].main== "Rain")
        {
            waethericon.src="images/rain.png";
        }else if(data.weather[0].main== "Drizzle")
            {
                waethericon.src="images/drizzle.png";
            }else if(data.weather[0].main== "Mist")
                {
                    waethericon.src="images/mist.png";
                }
    
}
searchbtn.addEventListener("click",()=>{
    if(searchbox.value != ""){
        checkweather(searchbox.value);
    }
    else{
        checkweather(bengaluru);
    }
})
