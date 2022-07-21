function main(bottles,dishes){

    let ml = bottles * 750;
    let dishs = 0;
    let pots = 0;
    let i = 1;
    while ( i < dishes.length && dishes[i-1] != 'End'){
 

        if(i % 3 === 0){
            ml -= dishes[i-1] * 15;
            pots += dishes[i-1];
            i++;
        } 
        else if (i % 3 != 0) {
            ml -= dishes[i-1] * 5;
            dishs += dishes[i-1];
            i++;
        }
            
            }
 
    if(ml > 0){
        console.log(`Detergent was enough!`);
        console.log(`${dishs} plates and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${ml} ml.`);
     
    } else {
        console.log(`Not enough detergent, ${ml*-1} ml more necessary`);    
    }

}

main(2,[53,65,55,"End"]);