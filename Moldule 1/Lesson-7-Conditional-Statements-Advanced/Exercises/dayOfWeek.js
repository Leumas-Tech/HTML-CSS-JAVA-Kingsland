function main(n) {

    switch (n) {
        case 1 :
            console.log("Monday");
        break;
   
        case 2 :
                 console.log("Tuesday");
        break;

        case 3 :
       console.log("Wednesday"); 
        break;

        case 4 :
            console.log("Thursday");
        break;
                    
        case 5 :
            console.log("Friday");
        break;
                        
        case 6 :
            console.log("Saturday");
        break;

        case 7 :
            console.log("Sunday");
        break;
                            
        
        default:
            if(n < 1 || n > 7){
                console.log("Error");
            }



    }
}
main(0);
main(5);
main(2);