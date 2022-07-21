function main(type,number,budget) {
    let FlowerPrice;
       
    if(type === "Roses"){
    FlowerPrice = 5; 
    }
    if(type === "Dahlias"){
    FlowerPrice = 3.8;
    }  
    if(type === "Tulips"){
    FlowerPrice = 2.8;
    }  
    if(type === "Narcissus"){
    FlowerPrice = 3;
    }  
    if(type === "Gladiolus"){
    FlowerPrice = 2.5;  
    }      
    
    let FinalPrice = FlowerPrice * number;
    
    
    if(number > 80 && type === "Roses"){ 
        FinalPrice = FinalPrice * (9/10);
        }           
    if(number > 90 && type === "Dahlias"){
        FinalPrice = FinalPrice - ((15/100) * FinalPrice);
        }
    if(number > 80 && type === "Tulips"){
        FinalPrice = FinalPrice - ((15/100) * FinalPrice);
        }
    if(number < 120 && type === "Narcissus"){
        FinalPrice = FinalPrice + ((15/100) * FinalPrice);
        }
    if(number < 80 && type === "Gladiolus"){
        FinalPrice = FinalPrice + ((2/10) * FinalPrice);
        }
    
       let remainderNotEnough = FinalPrice - budget;
       let remainderEnough = budget - FinalPrice;
       
    if(FinalPrice > budget){
        console.log(`Not enough money, you need ${remainderNotEnough.toFixed(2)} leva more.`);
    }
    else if(FinalPrice < budget){
        console.log(`Hey, you have a great garder with ${number} ${type} and ${remainderEnough.toFixed(2)} leva left.`);
    }
    }
main("Roses", 55,250);
main("Tulips", 88, 260);