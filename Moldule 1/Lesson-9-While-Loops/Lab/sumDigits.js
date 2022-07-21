function main(num){
var digits = num.toString().split('');

let i = 0;
 let sum = 0; 
 if (digits[0] === "-") {
    let holdThis = "";
    holdThis += digits.shift();
}
var realDigits = digits.map(Number);

 while(i<realDigits.length){
     sum += realDigits[i];
     i++;
 }


console.log(sum);
}
main(5634);











// function main(inputNum){
// let i = 0;
// let sum = 0;
// while(i<inputNum.length){
//     sum += inputNum.length;
//     i++;
// }
// console.log(sum);
// }
// main(5634);