function main(num1,num2,num3){
    let sum = num1+num2+num3;
    if(Number.isInteger(sum)){
        console.log(`${sum} - Integer`);
    }
    else {
        console.log(`${sum} - Float`);
    }
}

main(1,100,1.1);
main(100,200,303);
main(122.3,212.3,5);