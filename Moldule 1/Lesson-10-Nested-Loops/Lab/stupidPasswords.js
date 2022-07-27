function main(number){
    solve(number);
}
function solve(number){
let output = "";
    for(let firstNum = 2; firstNum <= number; firstNum+=2){
        for(let secondNum = 1; secondNum <= number; secondNum+=2){
            output+= `${firstNum.toString()}${secondNum.toString()}${firstNum*secondNum} `;
        }

    }
    console.log(output);
}

// function main(num){
//     let output =""
//     for(let i=2; i<=num;i+=2){
//         for(let j = 1; j<=num;j+=2){
//             output+=i.toString()+j.toString()+(i*j)+" ";
//         }
//     }
//     console.log(output);
// }

main(6);