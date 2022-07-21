function main(num1,num2,operator){
    calculator(num1,num2,operator);
}

function calculator (num1,num2,operator){
    let output =0;
    switch(operator){
        case "multiply":
           output = num1 * num2;
            break;
        case "divide":
            output = num1 / num2;
            break;
        case "add":
            output = num1 + num2;
            break; 
        case "subtract":
            output = num1 - num2;
            break;       
    }

console.log(output);

}

main(5,5,"multiply");
main(40,8,"divide");
main(12,19,"add");
main(50,13,"subtract");