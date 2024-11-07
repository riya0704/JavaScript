//break statements working in for loop
 
for(let i =0; i<=10; i++)
{
    if(i===4)
    {
        break;
    }
    console.log(i);
}
console.log("Loop exited");

for(let num=0;num<=10;num++)
{
    if(num===5)
    {
        continue;
      console.log(num);
    }
    console.log(num);
}

console.log("Loop exited");