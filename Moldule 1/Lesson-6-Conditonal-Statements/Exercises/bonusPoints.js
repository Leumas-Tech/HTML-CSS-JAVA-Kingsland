function points(num){
    var bonusPoints;
    if(num <= 100){
        bonusPoints = 5;
      
    }
    else if (num >= 100 && num < 1000){
        bonusPoints = num / 5;
    }
    else if (num > 1000) {
        bonusPoints = num / 10;
    }

    if(num % 2 == 0) {
        bonusPoints++;
    }
    else if (num % 5 == 0) {
        bonusPoints++;
        bonusPoints++;
    }

    console.log(bonusPoints);
    console.log(num + bonusPoints);

}

points(20);
points(175);
points(2703);
points(15875);