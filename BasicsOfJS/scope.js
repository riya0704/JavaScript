// var num3 = 100
let num1 = 100
if(true){
    let num1 = 10
const num2 = 30
// var num3 = 103  // var is global scope variable
// console.log('Inner ', num1 );

}

// console.log(num1);
// console.log(num2);
// console.log(`outer num1 is : ${num1}`);


function one(){
    const username = 'Riya'
    function two(){
        const webpages = 'youtube'
        //console.log(username);   
    }
    // console.log(webpages);
    two();
}
one();

if (true) {
    const username = 'Riya'
    if (username === 'Riya') {
        const website = ' github'
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);
console.log(addOne(2));

function addOne(values){
 return values + 2;
}

console.log(addTwo(3));  //shows error because of hoisting
const addTwo = function(values ){
    return values + 3;
}

