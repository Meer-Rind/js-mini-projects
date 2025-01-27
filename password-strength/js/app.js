//selecting the input adn result
let input = document.querySelector("#password");
let res = document.querySelector('#res');

//now adding a event listenr to the input
input.addEventListener("input",()=>{
    const pass = input.value;
    console.log(pass);

    //now applying the logic
    if(pass.length <8){
        res.textContent = "Too Short";
        res.style.color = "red";
    }
    else{
        res.textContent = "Password is long enough";
        res.style.color= "green";
        if(pass.search(/[a-z]/) == -1){
            res.textContent = "Password lacks lowercase alphabates";
            res.style.color = "red";
        }
        else if(pass.search(/[A-Z]/)==-1){
            res.textContent = "Password lacks UpperCase alphabtes";
            res.style.color = "red";
        }
        else if(pass.search(/[0-9]/) == -1){
            res.textContent = "Password lacks numbers";
            res.style.color = "red";
        }
        else if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\+]/)== -1){
            res.textContent = "Password lacks Special Characters";
            res.style.color = "red";
        }
        else{
            res.textContent = "Password is Strong";
            res.style.color = "green";
        }
    }
});