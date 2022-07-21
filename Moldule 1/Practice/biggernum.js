function bigger (num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        let greatestNumber = num1;
    }
    else if (num2 > num1 && num2 > num3){
        greatestNumber = num2;
    }
    else if (num3 > num1 && num3 > num2){
        greatestNumber = num3;
    }
    console.log(greatestNumber);

}
bigger(-1,-5,-9);