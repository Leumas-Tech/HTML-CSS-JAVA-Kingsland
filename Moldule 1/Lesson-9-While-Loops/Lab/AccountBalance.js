function main(incomes){

for(let i = 0; i < incomes.length; i++){
    let currentNum = incomes[i];

    if(incomes[i] >= 0){
        console.log(`Increase: ${incomes[i].toFixed(2)}`);
    
    }
    else if (incomes[i] <= 0){
        console.log(`Decrease: ${incomes[i].toFixed(2)*-1}`);
    }
    else if(incomes[i] === 'End'){
        let balance = incomes[0] + incomes[1] + incomes[2];
        console.log(`Balance: ${balance.toFixed(2)}`);
    }  

    }

}

main([500, 15.5,-80.35,'End']);