function main(budget,season) {
let destination;

        if (budget<=100 && season == 'summer'){         
         
                destination = 'Bulgaria';
                budget=((3/10)*budget);
        }
        else if(budget<=100 && season == 'winter'){
                destination = 'Balkans';
                budget=((7/10)*budget);
            }
        
        else if (budget<=1000 && season == 'summer' ){        
 
                destination = 'Europe';
                budget=((4/10)*budget);
            }
        else if(budget<=1000 &&  season == 'winter'){
                budget=((8/10)*budget);
            }
        
        else if (budget>1000){  
                budget=((9/10))*budget;
        }
          
       
    
    let type = "";
    if(season === 'winter'){
        type = "Hotel";
    }
    else if(season === 'summer'){
        type = "Camp";
    }
    if(destination == 'europe'){
        type = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
}

main(50 ,"summer");
main(75, "winter");
main(312 ,"summer");
main(687.53, "winter");
main(1500 ,"summer");

// function main(budget,season) {
// let destination;

// if (budget<=100){         
//      if(season == 'summer'){
//         destination = 'Bulgaria';
//         budget=((3/10)*budget);
//     }
//     else if(season == 'winter'){
//         destination = 'Balkans';
//         budget=((7/10)*budget);
//     }
// } 
// else if (budget<=1000){        
    
//     if(season == 'summer'){
//         destination = 'Europe';
//         budget=((4/10)*budget);
//     }
//    else if(season == 'winter'){
//         budget=((8/10)*budget);
//     }
// }


// if (budget>1000){  budget=((9/10))*budget;}
  


// let type = "";
// if(season === 'winter'){
// type = "Hotel";
// }
// else if(season === 'summer'){
// type = "Camp";
// }
// if(destination == 'europe'){
// type = "Hotel";
// }
// console.log(`Somewhere in ${destination}`);
// console.log(`${type} - ${budget.toFixed(2)}`);
// }