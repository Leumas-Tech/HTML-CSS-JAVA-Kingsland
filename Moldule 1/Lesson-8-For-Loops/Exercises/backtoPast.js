function main(legacy,years) {
    let year = years - 1800;
    let amountSpent=0;
    let age = 18;
    for(let i=1800; i<= years; i++){
if(i%2==0){
amountSpent= amountSpent + 12000;
age++;
}
else {
amountSpent = amountSpent + 12000 + age * 50;
age++;
}
    }
    let amountEnough=legacy - amountSpent;
    let amountNotEnough= amountSpent - legacy;
if(amountSpent < legacy){
console.log(`Yes! He will live a carefree life and will have ${amountEnough.toFixed(2)} dollars left.`);
}
if(amountSpent > legacy){
console.log(`He will need ${amountNotEnough.toFixed(2)} dollars to survive.`);
}

}

main(50000,1802);
main(400000,1841);