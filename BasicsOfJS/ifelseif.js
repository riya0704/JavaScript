//checks temprature
let temp = +prompt("enter temprature");
if(temp <0){
    console.log("extremely cold outside");
}else if(temp < 15){
    console.log("too cold");
}else if(temp < 25){
    console.log("whether is okay");
}else if(temp < 35) {
 console.log("let's go for swim");
}else if (temp < 45){
    console.log("turn on AC");
}else{
    console.log("too hot");
}
console.log("helllo");