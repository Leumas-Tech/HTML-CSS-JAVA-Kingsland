function main(hour,minute,second) {

    while(hour<24){
        while(minute<=60){                 
   

            while(second<=60){
                if(second === 60){
                    minute++;
                    second = second-60;
                }          
              if(minute === 60){
                hour++;
                minute = minute-60;
                } 
   
        if(hour> 23){
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
    second++;
}
} 
    }
    }
    
    main(21,59,58);
    