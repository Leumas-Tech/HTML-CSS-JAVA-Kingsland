function timeplusfifteen (hour,minutes){
minutes = minutes + 15;
if(minutes > 59) {
    hour = hour + 1;
    minutes = minutes - 60;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(hour > 23){
    hour = hour - 24;
}
// if(hour < 10){
//     hour = "0" + hour;
// }

console.log(hour + ":" + minutes);
}

timeplusfifteen(1,46);
timeplusfifteen(0,01);
timeplusfifteen(23,59);
timeplusfifteen(11,08);
timeplusfifteen(12,49);