function main (type, holidays, weekends) {
    let sofiasWeekends = 34.5;
    let hometoWeekends = weekends;

    let gamesDuringHolidays = holidays*(2/3);
    let gamesDuringWeekends = sofiasWeekends + weekends + gamesDuringHolidays;
    if(type === "leap"){
        gamesDuringWeekends = gamesDuringWeekends+(gamesDuringWeekends*(15/100));
    }
    console.log(Math.floor(gamesDuringWeekends));
}
main("normal",3,2); //38
main("leap",2,3); // 43
main("normal",11,6); //44
main("leap",0,1); // 41
main("normal",6,13); //43