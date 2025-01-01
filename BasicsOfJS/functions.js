function sayMyName(){
    console.log('R');
    console.log('I');
    console.log('Y');
    console.log('A');
}

//sayMyName();

// function addTwoNumbers(number1, number2) {
//  console.log(number1 + number2 )
// }
// const result = addTwoNumbers(7,8)
// console.log(`Result of addition two number:  ${result}`); //returns output undefined

function addTwoNumber(num1,num2){
    let result = num1+num2;
    return result;
    //second method
    //return num1+num2;
}
const result = addTwoNumber(3,7);
// console.log(`Result of two number addition : ${result}`);

function loginUserMessage(username = "Sam"){
    if(username === undefined)
    {
        console.log("enter a username");
        return
    }
    return `${username} just logged in !`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Riya"));
// ... is called rest operator
function calculateCardPrice (...num1) {
    return num1;
}
// console.log(calculateCardPrice(10,12,14));
const user = {
    username : 'Riya',
    price : '2000',
}

function handleObj(anyobject){
 console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 
}

// handleObj(user);

handleObj({
    username : 'Riya',
    price: '433'
})

const newArray = [ 1000, 3000, 2000];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray));
