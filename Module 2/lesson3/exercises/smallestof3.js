function main(num1,num2,num3){
smallestof3(num1,num2,num3);
}

function smallestof3 (num1,num2,num3){
let lowest = num1;

if(num2 < num1 && num2 < num3){
    lowest = num2;
} else if (num3 < num2 && num3 < num1 ){
    lowest = num3;
} else{
    lowest = num1;
}
console.log(lowest);

}

main(2,5,3);
main(600,342,123);
main(25,21,4);