function main(days,bakers,cakes,waffles,pancakes){
    cakes = cakes * 45;
    waffles = waffles * 5.80;
    pancakes = pancakes * 3.20;
    var daytotal = (cakes + waffles + pancakes)* bakers;
    var campaignCost = daytotal * days;
    var amountAfterCover = campaignCost-((1/8)*campaignCost);
    console.log(amountAfterCover.toFixed(2));
}
main(20,8,14,30,16);
main(131,5,9,33,46);