function main (num1, num2, num3) {

    let negativeNumbers = 0;
    if(num1 < 0) {
        negativeNumbers++;
    }
    if(num2 < 0) {
        negativeNumbers++;
    }
    if(num3 < 0) {
        negativeNumbers++;
    }

    if (negativeNumbers == 0 || negativeNumbers == 2){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }


}
main(2,3,-1);
main(-3,-4,5);