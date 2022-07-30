let text = 'fnadskljfdsakjbfhjksdv:123 ad:456';
let replacement='***';
let regex = /\d{3}/g;
let result = text.replace(regex,replacement);
console.log(result);





// so basically this is us taking any value after a trigger and replacing it with a new string.

// let int = 456;
// let replacement = 243987523945;
// let regex = /\d{3}/g;
// let result = int.swap(regex,replacement);
// console.log(result);