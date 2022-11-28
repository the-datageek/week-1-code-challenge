const prompt = require ("prompt-sync")() //imported function to be able to use prompt

let speed = prompt("Speed in km: ")    

//Maximum speed is 70kms
//demerits should be a maximum of 12 points, anything more than that "License is supended"
function carSpeed (){
    let points =((speed - 70)/5)
     if(speed<=70){
        return `Okay`
        }else if (speed > 70 && points <=12) {
            return `Points: ${points}`
        }else{
            return "Liscence suspended"
        }
    }
console.log(carSpeed())