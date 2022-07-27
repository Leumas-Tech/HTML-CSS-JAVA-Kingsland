function main(hour,minute,second) {

    for(let hours = hour; hours < 24; hours++){
        for(let minutes = minute; minutes < 60; minutes++){                 
            for(let seconds = second; second<60; second++){
       
            if(minutes = 59){
                minutes = 0;
                hours++;
                
                }
            if(seconds = 59){
                    seconds = 0;
                    minutes++;
                }   
        if(hours> 23){
        break;
        }
    //0 0 0
       else if(hour<10 && minute < 10 && second <10){
        console.log(`0${hour}:0${minute}:0${second}`);
       }
    //0 0 10
       else if(hour<10 && minute < 10 && second >10){
        console.log(`0${hour}:0${minute}:${second}`);
       } 
    // 0 10 0   
       else if (hour < 10 && minute > 10 && second < 10){
        console.log(`0${hour}:${minute}:0${second}`);
       }
    // 0 10 10
       else if(hour<10 && minute > 10 && second >10){
        console.log(`0${hour}:${minute}:${second}`);
       }
    //10 0 0
        else if(hour>10 && minute < 10 && second <10){
        console.log(`${hour}:0${minute}:0${second}`);
       }
    // 10 0 10
    else if(hour>10 && minute < 10 && second >10){
        console.log(`${hour}:0${minute}:${second}`);
       }
    // 10 10 0
    else if(hour>10 && minute > 10 && second <10){
        console.log(`${hour}:${minute}:0${second}`);
       }
    //10 10 10
    else if(hour>10 && minute > 10 && second >10){
        console.log(`${hour}:${minute}:${second}`);
       }
}
} 
    }
    }
    
    main(21,59,58);
    