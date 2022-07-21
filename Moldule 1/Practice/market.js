function foodmarket (day,banana, apple, kiwi) {
    if (day === "weekend"){
        let priceBanana = 2.70;
        let priceApple = 1.60;
        let priceKiwi = 3.00;
    }
    else if (day === "weekday"){
        priceBanana = 2.50;
        priceApple = 1.30;
        priceKiwi = 2.20;

    }

    var total = ((banana * priceBanana) + (apple * priceApple) + (kiwi * priceKiwi));
    console.log(total);
}

foodmarket();
