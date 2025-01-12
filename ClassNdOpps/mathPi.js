// console.log(Math.PI);
Math.PI = 4;
// console.log(Math.PI);


const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
const newObj = {
    name:'spiderman',
    power:'superPower',
    isAvailable:true,
    newclass :function(){
       console.log('code isnt working');
       
    }
}
// console.log(Object.getOwnPropertyDescriptor(newObj,'name'));

// Object.defineProperty(newObj,'name',{
//     writable:false,
//     enumerable:false,
// })
// const myNewObj = Object.create(null)
// console.log(Object.getOwnPropertyDescriptor(newObj,'name'));

for (const [key,value] of Object.entries(newObj)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
    
}