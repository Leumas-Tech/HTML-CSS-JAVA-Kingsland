function main (distance,passangers,price){
    let FuelNeeded = (distance / 100) * 7;
    FuelNeeded += passangers * 0.100;
    let total = FuelNeeded * price;
    console.log(`Needed money for that trip is ${total.toFixed(3)}lv.`);
}
main(260,9,2.49);
main (90,14,2.88);