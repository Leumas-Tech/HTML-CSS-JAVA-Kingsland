function main(budget,season,number) {
    let price = 0;
    if(season ==="Spring"){
        price = 3000;
    }
    if(season ==="Summer" || season =="Fall"){
        price = 4200;
    }
    if(season ==="Winter"){
        price = 2600;
    }

    if(number <= 6){
        price = (price - ((1/10)* price));
    }
    else if( number >= 7 && number <=11){
        price = (price - ((15/100)* price));
    }
    else if(number >=12){
        price = (price-((1/4)*price));
    }

    if(number % 2 === 0){
        price = price-((5/100)*price);
    }
    let remainderNotEnough = price - budget;
    let remainderEnough = budget - price;
    if(price > budget){
        console.log(`Not enough money! You need ${remainderNotEnough.toFixed(2)} leva.`);
    }
    else if(price < budget){
        console.log(`Yes! you have ${remainderEnough.toFixed(2)} leva left.`);
    }
}
main(3000, "Summer", 11);