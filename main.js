var hand = document.querySelector(".hand");
var seconds = document.querySelector(".seconds");
var mins = document.querySelector(".minutes");
var hours = document.querySelector(".hours");

function displayTime() {
    var currentTime = new Date();
    var currentSecond = currentTime.getSeconds();
    var currentMinute = currentTime.getMinutes();
    var curentHour = currentTime.getHours();

    //calculate degrees
    var secondDegree = ((currentSecond / 60) * 360) + 90;
    var minutesDegree = ((currentMinute / 60) * 360) + 90;
    var hourDegree = ((curentHour / 12) * 360) + 90;

    seconds.style.transform = `rotate(${secondDegree}deg)`
    mins.style.transform = `rotate(${minutesDegree}deg)`
    hours.style.transform = `rotate(${hourDegree}deg)`

}


setInterval(displayTime, 1000);