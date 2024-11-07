
for(let i = 0;i<=10;i++)
{
    console.log(i);
}
  
//console.log("current value of i is ",i);
//this line give error because let can't be accessed out of loop. 
//same this work with "var"
for(var i =0; i<=10;i++)
{
    console.log(i);
}
console.log("current value of i is ",i);

//sum of first 10 natural numbers
// for(let i=0; i<=10;i++)
// {
//     let sum = (i*(i+1))/2;
//     console.log(sum);

// }
let total = 0;
let num = 10;
for(let i = 1; i<=num;i++)
{
 total = total +i;

}
console.log(total);