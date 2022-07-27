function main(number){
let solutions =0;
    for(let first = 0; first <= number; first++){
        for(let second =0; second <= number; second++){
            for(let third =0; third<=number; third++){
                for(let fourth =0; fourth<= number; fourth++){
                    for(let fifth = 0; fifth<=number; fifth++){
                        if(first+second+third+fourth+fifth===number){
                            solutions++;
                        }

                    }
                }
            }
        }
    }

console.log(solutions);


}

main(25);