function bonus (points){
    let bonuspoints=0;
    if(points <= 3 && points >= 0){
         bonusPoints = 5;
    }
    else if(points <= 6 && points >= 4) {
         bonusPoints = 15;
    }
    else if(points <= 9 && points >= 7){
         bonusPoints = 20;
    }
    console.log( points + bonusPoints);
}

bonus(4);
bonus(8);
bonus(2);