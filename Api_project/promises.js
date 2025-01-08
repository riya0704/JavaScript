const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Promise start');
    resolve()
  },1000)
})

promiseOne.then(function(){
    console.log('Async start');
    
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Promise start Three');
    resolve()
  },1000)
}).then(function(){
    console.log('Async start Three');
    
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Promise start Two');
    resolve([
    {
      'username' :'Riya',
      'email':'riya@example.com'
    },
    {
        'gitHub':'riya0704',
        'portfolio':'https://riyav07/emample.com'
    }

    ])
  },1000)
}).then(function(data){
    console.log(data);
    
})

//callback hell
const promiseFour = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = false;
    if(!error){
       resolve({username:'riya',password:'xyz@123'})
    }else{
        reject('Something went wrong')
    }
   },1000)
})

promiseFour.then((data)=>{
    console.log(data);
    return data.password
}).then((pass)=>{
    console.log(pass);
}).catch((error)=>{
    console.log(error);  
}).finally(()=> console.log('The promise is either resolved or rejected')
)


const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error =true;
    if(!error){
       resolve({username:'RV',password:'123'})
    }else{
        reject('ERROR: 404')
    }
   },1000)
})

async function consumePromise(){
   try {
     const response = await promiseFive
     console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    
}

consumePromise()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('ERR:',error);
        
//     }
    
// }
// getAllUser()

//another way 
fetch('https://api.github.com/users/riya0704')
.then((res)=>{
 return res.json()
})
.then((data)=>{
  console.log(data);
  
})
.catch((error)=>{
    console.log('ERROR')
})