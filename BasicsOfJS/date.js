let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2025 , 0 , 1);
// let mycreatedDate = new Date(2025 , 0 , 1 , 7 , 7);
// let myCreatedDate = new Date('2025-01-01');
let myCreatedDate = new Date('01-01-2025')
console.log(myCreatedDate.toLocaleString());

let myTimestamps =  Date.now();
// console.log(myTimestamps);

// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday: 'long' 
})