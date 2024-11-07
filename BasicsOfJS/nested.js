//nested if else
// Ques - winning number is 19 if user enter less then or equal to 18 print too low and of user enter 20 or more than print too high

let winningNumber = 19;
let userGuess = +prompt("guess a number");
//console.log(userGuess , typeof userGuess);

if (userGuess === winningNumber)
{
    console.log("your guess is right");

}
else{
    if(userGuess<winningNumber)
    {
      console.log("too low !!");  
    }
    if(userGuess>winningNumber)
    {
        console.log("too high !!");
    }
   // console.log("your guess is wrong");
}