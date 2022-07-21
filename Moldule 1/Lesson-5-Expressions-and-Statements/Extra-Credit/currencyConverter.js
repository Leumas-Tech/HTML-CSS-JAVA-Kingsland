function convert (num,input,output) {
//convert to input to bgn. then our bgn gets converted into output.

if(input == "BGN") {
    num = num * 1;
}
//bgn to bgn

else if (input == "USD"){
    num = num / 1.79549;
}
// usd to bgn

else if(input == "EUR"){
    num = num / 1.95583;
}
//eur to bgn

else if(input == "GBP"){
    num = num / 2.53405;
}


//gbp to bng




if(output == "BGN") {
    num = num * 1;
}
//bgn to bgn

else if (output == "USD"){
    num = num * 1.79549;
}
//bgn to usd

else if(output == "EUR"){
    num = num * 1.95583;
}
//bgn to eur

else if(output == "GBP"){
    num = num * 2.53405;
}
//bgn to gbp

console.log(num.toFixed(2) + " " + output)

}

convert(20,"USD", "BGN");
convert(100,"BGN", "EUR");
convert(12.35,"EUR", "GBP");
convert(150.35,"USD", "EUR");
