const userMail = [];
if (userMail) {
    console.log('got user email');
    
} else {
    console.log("don't have user email");
    
}

//falsy values
// false, 0, -0 , BigInt , null , "" , undefined , 0n , NaN

//truthy values

// "0" , "False" , " ", [], {}, function(){}, 12n , Infinity , -Infinity    

if(userMail.length === 0){
   console.log("Array is empty");
   
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log('Obj is empty'); 
}

//nullish coalescing operator (??) : null undefined
let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 14
val1 = null ?? 10 ?? 20
console.log(val1);
