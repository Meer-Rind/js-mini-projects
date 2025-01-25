let API_KEY = '36d52e11f4cb469b93c111337252201';

//writing javascript to make that functionla
let input = document.querySelector("#inputCity");
let button = document.querySelector('#search');
let result = document.querySelector("#result");
let cityName = document.querySelector("#cityName");
let temp = document.querySelector('#temp');
let condition = document.querySelector('#condition');
let weatherIcon = document.querySelector("#weatherIcon");

let errormessage = document.querySelector('#errormessage');
//now adding the eventlistener
button.addEventListener('click',async()=>{
    //now checking that city is present or not for handling edge cases
    const city = input.value.trim();
    if(!city){
        errormessage.textContent = "Please Enter a City";
        errormessage.classList.remove('hidden');
        setTimeout(()=>{
            errormessage.classList.add("hidden");
        },3000);
    };

    //know making a try and catch method for the fetching the api data and repsonse
    try{
        const repsonse = await axios.get('http://api.weatherapi.com/v1/current.json',{
            params:{
                key:API_KEY,
                q:city,
            },
        });//using .get method to get the repsonse
        
        //now making the reponse data 
         const data = repsonse.data;//extracting the data from the api
        //now giving values to the html compenets

        cityName.textContent = `City: ${data.location.name},  ${data.location.country}`;
        temp.textContent = `Temperature: ${data.current.temp_c}`;
        condition.textContent = `Condition: ${data.current.condition.text}`;
        weatherIcon.src = data.current.condition.icon;
        result.classList.remove("hidden");
    }
    catch(error){
        error1.classList.remove('hidden');
        error1(error);
        setTimeout(()=>{
            error1.classList.add('hidden');
        })
    }
})