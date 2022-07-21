function main(month,nights){
    let studio=0;
    let apartment =0;
switch (month){
    case ("May"):
        studio = 50;
        apartment=65;
        break;
        case ("October"):
            studio = 50;
            apartment=65;
            break;
    case ("September"):
        studio = 75.20;
        apartment=68.70;
        break;
    case ("June" ):
            studio = 75.20;
            apartment=68.70;
            break;   
     case ("July" || "August"):
        studio = 76;
        apartment=77;
        break;   
        case ("August"):
            studio = 76;
            apartment=77;
            break;  
  
}
      let priceStudio = studio * nights;
    let priceApartment = apartment * nights;


     if(nights > 14 && (month === "May" || month === "October")){
            priceStudio = priceStudio - ((3/10)*priceStudio);
        }        
            else if(nights > 7 && (month === "May" || month === "October")){
            priceStudio = priceStudio - ((5/100)*priceStudio);
        }
        if(nights > 14){
            priceApartment = priceApartment - ((10/100)*priceApartment);
        }
       if(nights > 14 && (month === "June" || month === "September")){
            priceStudio = priceStudio - ((20/100)*priceStudio);
        }
    

        console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}


main("October", 23);