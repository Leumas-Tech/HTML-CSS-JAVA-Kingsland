function main(degrees,timeofDay){
    let Outfit='';
    let Shoes ='';
    switch(timeofDay){
        case "Morning":
            if(degrees >=10 && degrees <= 18){
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
            }
            if(18<degrees<=24){
            Outfit = "Shirt";
            Shoes = "Moccasins";
            }
            if(degrees>=25){
            Outfit = "T-Shirt";
            Shoes = "Sandals";        
            }
            break;
        case "Afternoon":
            if(10<=degrees<=18){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }
            if(18<degrees<=24){
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            }
            if(degrees>=25){
                Outfit = "SwimSuit";
                Shoes = "Barefoot";   
            }
            break;
        case "Evening":
            if(10<=degrees<=18){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }
            if(18<degrees<=24){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }
            if(degrees>=25){
                Outfit = "Shirt";
                Shoes = "Moccasins";  
            }
            break;
    }
console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}

main(16, "Morning");