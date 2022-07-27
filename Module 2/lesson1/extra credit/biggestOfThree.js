function main(num1,num2,num3){

let biggestNumber = num1;

if(num3 > num2 && num3 > num1){
    biggestNumber = num3;
}
if(num2 > num3 && num2 > num1){
    biggestNumber = num2;
}

console.log(biggestNumber);
}

main(-2,7,3);
main(130,5,99);
main(43,43.2,43.1);