// trim() : remove space 
 let firstname = "   Riya    ";
 console.log(firstname.length);
firstname = firstname.trim()
console.log(firstname);
 //let newString = firstname.trim()
 //console.log(newString);
 //console.log(newString.length);

 //toUpperCase() -- capitalized all words 
firstname = firstname.toUpperCase();
console.log(firstname);

// toLowerCase()

firstname = firstname.toLowerCase();
console.log(firstname);

//slice -- to take particular words from variables

let newString = firstname.slice(0,2);
console.log(newString);