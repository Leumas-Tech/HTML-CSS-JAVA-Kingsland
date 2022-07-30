function main (hours, minutes){

for( let h = hours; h < 24; h++){

     for( let m = minutes; m<60; m++){  
        console.log(`${hours} : ${m}`);
        if(minutes > 59){
            minutes = minutes - 60;
            hours++;
        }
     }


} 
}

main(8,5);