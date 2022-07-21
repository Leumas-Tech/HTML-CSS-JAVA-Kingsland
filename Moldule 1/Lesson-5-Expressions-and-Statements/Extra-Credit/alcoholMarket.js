function main(whiskeyPrice,beer,wine,rakia,whiskeyBottles){
    let Pricerakia = whiskeyPrice / 2;
    let Pricewine = (whiskeyPrice/2)*.6;
    let Pricebeer = (whiskeyPrice/2)*.2;

    let amountRakia = rakia * Pricerakia;
    
    let amountWine = wine * Pricewine;
    console.log(Pricewine);
 
    let amountBeer = beer * Pricebeer;
   let  amountWhiskey = whiskeyBottles * whiskeyPrice;

    var total = amountRakia + amountWine + amountBeer + amountWhiskey;

    console.log(total.toFixed(2));

}

main(50,10,3.5,6.5,1);
main(63.44,3.57,6.35,8.15,2.5);