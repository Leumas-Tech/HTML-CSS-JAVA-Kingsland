function main(num){
    let numbers = '';
for(let num1 = 1; num1 <=num; num1++){
    for(let num2 = 0; num2 <= num; num2++){
        for(let num3 = 0; num3 <= num; num3++){
            for(let num4 = 0; num4 <= num; num4++){
                if(num1 +num2 === num && num3 + num4 === num){
                    numbers+=`${num1}${num2}${num3}${num4} `;
                }
            }
        }
    }
}


console.log(numbers);
}

main(3);
main(4);