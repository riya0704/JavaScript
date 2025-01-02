//Immediately Invoked Function Expression (IIFE)
//named iife
(function chai(){
    console.log(`Db connected`);
    
})();
// chai(); 
//simple iife
( (name) => {
    console.log(`DB connected two ${name}`);
    
})('Riya')