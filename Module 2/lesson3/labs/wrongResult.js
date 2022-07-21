function main(num1,num2,num3){
   console.log(posOrNeg(num1,num2,num3));
}

function posOrNeg(num1,num2,num3){

if(num1 === 0 || num2 === 0 || num3 ===0){
   return "Positive";
}
let negativeNumbers = countOfNegs(num1,num2,num3);
// negativeNumbers += isNegative(num1);
// negativeNumbers += isNegative(num2);
// negativeNumbers += isNegative(num3);

if (negativeNumbers % 2 === 0){
    return "Positive";
} else{
    return "Negative";
}
}

function countOfNegs(num1,num2,num3){
    let count = 0;
    if(num1 < 0){
    count++;
}
if(num2 < 0){
    count++;
}
if(num3 < 0){
    count++;
}

return count;
}






main(5,12,-15);
main(-6,12,14);
main(-1,-2,-3);
main(-1,0,1);