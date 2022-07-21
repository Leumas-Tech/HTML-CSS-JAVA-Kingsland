function main(hours, minutes) {


    while (hours < 24){
        if(hours === 23 && minutes === 60){
                break;
            }
         if ((hours > 10 || hours < 10) && minutes === 60){
            hours++;
            console.log(`${hours} : 00`);
        
        }   else if(hours < 10 && minutes < 10){
            console.log(`0${hours} : 0${minutes}`);
        } else if ( hours < 10 && minutes > 10){
            console.log(`0${hours} : ${minutes}`);
        } else if ( hours > 10 && minutes < 10){
            console.log(`${hours} : 0${minutes}`);
        } else if(hours > 10 && minutes > 10){
            console.log(`${hours} : ${minutes}`);
        } 
if(minutes === 60 && hours < 23){
    hours++;
    minutes = minutes - 59;
}
        minutes++;
 

// for loop bracket
    } // while loop bracket
} // function bracket
main(8,5);