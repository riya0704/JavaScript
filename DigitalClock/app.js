const clock = document.getElementById('clock');



setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleTimeString());  //shows time on console
clock.innerHTML = date.toLocaleTimeString();
},1000)