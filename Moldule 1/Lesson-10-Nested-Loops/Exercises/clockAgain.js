function main(hour,minute) {

while(hour<24){
    while(minute<=60){
        if(minute === 60){
            hour++;
            minute = minute-60;
        }  
        break;
    }if(hour === 24){
        break;
    }
    else if(minute > 9 && hour > 9){
    console.log(`${hour} : ${minute}`); 
    } else if (minute < 10 && hour < 10){
        console.log(`0${hour} : 0${minute}`); 
    } else if(hour > 9 && minute < 10 ){
        console.log(`${hour} : 0${minute}`); 
    } else if(hour < 10 && minute > 9 ){
        console.log(`0${hour} : ${minute}`); 
    }
minute++;
}
}

main(8,5);
