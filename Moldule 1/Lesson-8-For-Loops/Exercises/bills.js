function main(months,electricBill) {
        let electricSum = 0;
  
    for(let i = 0; i < months; i++){ 
        let currentBill = (electricBill[i]);
        electricSum = electricSum + currentBill;
    }

    let waterSum = months * 20;
    let internetSum = months * 15;
    let otherSum = (electricSum + waterSum + internetSum) + ((electricSum + waterSum + internetSum)*(2/10));

    let averageSum = ( waterSum + electricSum + internetSum + otherSum ) / months;

    console.log(`Electricity: ${electricSum.toFixed(2)} $`);
    console.log(`Water: ${waterSum.toFixed(2)} $`);
    console.log(`Internet: ${internetSum.toFixed(2)} $`);
    console.log(`Other: ${otherSum.toFixed(2)} $`);
    console.log(`Average: ${averageSum.toFixed(2)} $`);


}

main(5,[68.63,89.25,132.53,93.53,63.22]);