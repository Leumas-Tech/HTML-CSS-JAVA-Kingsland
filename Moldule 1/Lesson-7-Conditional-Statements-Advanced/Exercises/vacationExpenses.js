function main (season, type, days) {

let price = 0;
let discount = 0;
switch(season){
    case "Spring": 
     discount = .20;
        switch(type){
            case "Hotel":
               price = 30;
             
            break;
            case "Camping":
                price = 10; 
            break;
        }

break;

    case "Summer":
        discount = 0;
        switch(type){
            case "Hotel":
                price = 50;
            break;
            case "Camping":
                price = 30;
            break;
        }
break;
    case "Autumn":
        discount = .30;
        switch(type){
            case "Hotel":
                price = 20;
            break;
            case "Camping":
                price = 15;
            break;
        }
break;
    case "Winter":
        discount = .10;
        switch(type){
            case "Hotel":
                price = 40;
            break;
            case "Camping":
                price = 10;
            break;
        }
 break;
}
let total = ((price * days)-(price*discount));
console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);