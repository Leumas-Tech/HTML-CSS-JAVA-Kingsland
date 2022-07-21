function main( target , numbers) {
let total = 0;
let transaction;
let cashTrans =0;
let cardTrans = 0;
let totalCash = 0;
let totalCard = 0;
let i = 0;
while(total < target && numbers[i] != 'End' && i < numbers.length){
transaction = numbers[i];

if(i % 2 === 0){
    //cash payments

    //if over $100 you cant pay cash
    if(transaction > 100){
        console.log(`Error in transaction!`);
        i++;
        
    } else {
        total += numbers[i];
        totalCash += numbers[i];
        console.log(`Product sold!`);
        cashTrans++;
        i++;
        
    }

 
} 
else if (i % 2 != 0){
    //card payments
    if(transaction < 10){
        console.log(`Error in transaction!`);
        i++;
        
    } else {
        total += numbers[i];
        totalCard += numbers[i];
        console.log(`Product sold!`);
        cardTrans++;
        i++;
        
    }

}

}

let cardAverage = totalCard / cardTrans;
let cashAverage = totalCash / cashTrans;
if(total < target){
    console.log(`Failed to collect required money for charity`);
} else {
    console.log(`Average CS: ${cashAverage.toFixed(2)}`);
    console.log(`Average CC: ${cardAverage.toFixed(2)}`);
}
}
 
main(500,[120,8,63,256,78,317]);