function convertion() {
    var number = prompt("Enter the amount you want to convert");


    var inCurrency = prompt("Enter your input currency");
while (inCurrency.toLowerCase == '' || inCurrency.toLowerCase != "bgn" || inCurrency.toLowerCase != "usd" || inCurrency.toLowerCase != "eur"  || inCurrency.toLowerCase != "gbp") {
    if (inCurrency.toLowerCase == "bgn"){
    inCurrency = 1;
}
    else if (inCurrency.toLowerCase == "usd") {
    inCurrency = 1.79549;
}
    else if (inCurrency.toLowerCase == "eur") {
    inCurrency = 1.95583;
} 
    else if (inCurrency.toLowerCase == "gbp") {
    inCurrency = 2.53405;
}
else {
    console.log("Please enter a valid input currency BGN USD EUR GBP")
        }
    }


    var outCurrency = prompt("Enter your output currency");

    while (outCurrency.toLowerCase == '' || outCurrency.toLowerCase != "bgn" || outCurrency.toLowerCase != "usd" || outCurrency.toLowerCase != "eur"  || outCurrency.toLowerCase != "gbp") {
        if (outCurrency.toLowerCase == "bgn"){
        inCurrency = 1;
    }
        else if (outCurrency.toLowerCase == "usd") {
        outCurrency = 1.79549;
    }
        else if (outCurrency.toLowerCase == "eur") {
        outCurrency = 1.95583;
    }
        else if (outCurrency.toLowerCase == "gbp") {
        outCurrency = 2.53405;
    }
    else {
        console.log("Please enter a valid output currency BGN USD EUR GBP");
            }
        }

    while(number >= 0 && inCurrency != '' && outCurrency != '') {
        var convert = number / 
    }


}