
// let toptime=document.getElementById("time_sml")
// let centertime=document.getElementById("time_big")
// let day1=document.getElementById("day")
let toptime= document.querySelector('#time_sml')
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function disptime() {

    //creating a variable which stores today date 
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var day = today.getDay();


    time_sml.textContent = hours + ":" + minutes + ":" + seconds;
    time_big.textContent = hours + ":" + minutes + ":" + seconds;
    day1.textContent = days[new Date().getDay()];
}
setInterval(disptime, 1000);