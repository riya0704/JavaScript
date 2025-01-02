
for(let i = 0;i<=10;i++)
{
    //console.log(i);
}
  
//console.log("current value of i is ",i);
//this line give error because let can't be accessed out of loop. 
//same this work with "var"
for(var i =0; i<=10;i++)
{
    //console.log(i);
}
//console.log("current value of i is ",i);

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
// console.log(total);

//for of loop

const arr = [1,2,3,4,5]
for (const element of arr) {
   // console.log(arr);
    
}

const greetings = 'how is your day going'
for (const char of greetings) {
   // console.log(char);
}

//Maps

const map = new Map()
map.set('IN','India');
map.set('USA','United states of America');
map.set('Fn','France');

//console.log(map);

for (const [key , value] of map) {
    //console.log(key, '-->' , value);   
}

// const myObj = {
//     'Game1':'NFS',
//     'Game2':'GTA',
//     'Game3':'FIFA',
//     'Game4':'Mortal Kombat',
// }
// for (const [key,value] of myObj) {
//     //console.log(key , '-->' , value);
//     //TypeError: myObj is not iterable
// }

const programming = ['js','rb','py','java']
for (const key in programming) {
  //console.log(programming[key]);
  
}

//for each loop

const coding = ['js','python','java','cpp']

coding.forEach( function (item) {
    //console.log(item);
    
})

coding.forEach( (item) => {
// console.log(item);

})

function printMe(item,index,arr){
    // console.log(item,index,arr); 
}
// coding.forEach(printMe);


const myCoding = [
    {
        languageName:'JavaScript',
        languageFileName:'js'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
    {
        languageName:'cpp',
        languageFileName:'c++'
    }
]

myCoding.forEach( (item) =>{
    
    //console.log(item.languageFileName,item.languageName);
    
})

const myNums = [1,2,3,4,5,6,7,8,9,0];
// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//     return num > 4})
// console.log(newNums);
//another way 

const newNums = []
myNums.forEach((num) =>{
    if(num > 3){
     newNums.push(num)
    }
})

console.log(newNums);
const book = [
    { title: 'book one' , genre:'science' , publish: 2002},
    { title: 'book two' , genre:'history' , publish: 2004},
    { title: 'book three' , genre:'science' , publish: 2000},
    { title: 'book four' , genre:'maths' , publish: 2007},
    { title: 'book five' , genre:'history' , publish: 2008},
];

let mybooks = book.filter((bk)=> bk.genre === 'science');
 mybooks = book.filter((bk) => bk.publish >=2003 && bk.genre ==='history')
console.log(mybooks);
