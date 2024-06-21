

let form=document.querySelector("form")
form.addEventListener("submit",(event)=>{
    
    event.preventDefault()
    let fetchData=async()=>{
        let apikey="58091c2ccbd7339093308986b54989a6"
        let cityname=document.getElementById("location").value
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
        console.log(data);
        let finaldata= await data.json()
        console.log(finaldata); 

        let tempValue=document.getElementById("temp_value")
        let tempHumid=document.getElementById("humid_value")
        let tempcondition=document.getElementById("condition")
        let background=document.querySelector("#main_container")

        let finalTemp=Math.round(finaldata.main.temp-273)
        let finalHumid=finaldata.main.humidity
        let finalCondition=finaldata.weather[0].main


        tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
        tempHumid.innerHTML=`${finalHumid}KMPH`
        tempcondition.innerHTML=`${finalCondition}`

        let weatherImage=document.getElementById("img")

        switch (finalCondition) {
            case "Clouds":
                weatherImage.src='/assets/clouds.png';
            background.style.backgroundImage="url(/assets/clouds_nature.img)"

                break;
            
            case "Haze":
                weatherImage.src='/assets/haze.png'
                background.style.backgroundImage="url(/assets/haze_nature.img)"
                background.style.animation="2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both"
                break;
                
                case "Snow":
                    weatherImage.src='/assets/snow.gif'
                    background.style.backgroundImage="url(/assets/clouds_nature.img)"
                    break;
                    
                    case "Dust":
                        weatherImage.src='/assets/dust.gif'
                        background.style.backgroundImage="url(/assets/clouds_nature.img)"
                        break;
                        
                        case "Rain":
                            weatherImage.src='/assets/rain.gif'
                            background.style.backgroundImage="url(/assets/rain_nature.img)"
                            break;
                        case "Mist":
                            weatherImage.src='/assets/mist.png'
                            background.style.backgroundImage="url(/assets/mist_nature.img)"
                            background.style.animation= "2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both";
                            break;

                            default:
                                weatherImage.src='/assets/Akatsuki-Logo.png'
                                break;
            
        }
    }
    fetchData()
})
