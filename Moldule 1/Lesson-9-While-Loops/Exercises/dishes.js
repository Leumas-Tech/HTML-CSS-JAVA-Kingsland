function main (detergents,dishes) {
    //Amount of soap we have in ml
    let load = 1;
    
    let plates = 0;
    let pots = 0;
let soap = detergents * 750;
for(let i = 1; i<dishes.length-1; i++){
    if(load % 3 === 0){
        //if this is a third load, 15ml of soap per pot
        pots += dishes[i];  
    } else {
        //all other loads 5ml per plate
        plates =+ dishes[i];      
    }
    load++;

    let soapUsed = (plates * 5) + (pots * 15);
    console.log(soapUsed);
}


}
main(2,[53,65,55,"End"]);