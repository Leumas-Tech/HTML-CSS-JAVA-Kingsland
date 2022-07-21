function main(num1,num2,operator){
    let total = 0;
    let evenOdd='';
switch(operator){
    case '+':
        total = num1 + num2;
        if(total % 2 === 0){
            evenOdd == "even";
        }
        if(total % 2 === 1){
            evenOdd == "odd";
        }
        console.log (`${num1} ${operator} ${num2} = ${total} - ${evenOdd}`);
        break;

    case'-':
    total = num1 - num2;
    if(total % 2 === 0){
        evenOdd == "even";
    }
    if(total % 2 === 1){
        evenOdd == "odd";
    }
    console.log (`${num1} ${operator} ${num2} = ${total} - ${evenOdd}`);

        break;

    case'*':
    total = num1 * num2;
    if(total % 2 === 0){
        evenOdd == "even";
    }
    if(total % 2 === 1){
        evenOdd == "odd";
    }
    console.log (`${num1} ${operator} ${num2} = ${total} - ${evenOdd}`);
        break;

    case'/':
    total = num1 / num2;
    console.log (`${num1} / ${num2} = ${total.toFixed(2)}`);
        break;

    case'%':
    total = num1 % num2;
    console.log (`${num1} ${operator} ${num2} = ${total}`);
        break;
}
if(num2 === 0){
    console.log(`Cannot divide ${num1} by zero`)
}
}

main(10,12, "+");
main(10,1,"-");
main(7,3,"*");
main(123,12,"/");
main(10,3,"%");