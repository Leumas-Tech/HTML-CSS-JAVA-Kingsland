function main(num1,num2,num3){
solve(num1,num2,num3);
}

function solve(num1,num2,num3){

for(let i =2; i<=num1; i+=2){
    for(let j =2; j<=num2; j++){
        if(j === 2 || j === 3 || j === 5 || j ===7){
            for(let k=2; k<=num3; k+=2){
                    console.log(`${i}${j}${k}`);
            }       
        }

    }
}


}

main(3,5,5);