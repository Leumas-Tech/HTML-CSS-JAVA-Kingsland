function main (type,rows,columns) {
    let price = 0;
switch(type){
    case "Premiere":
        price = 12;
        break;
    case "Normal":
        price = 7.50;
        break;
    case "Discount":
        price = 5;
        break;
}
let total = (rows * columns)*price;
console.log(total.toFixed(2) + " leva");

}

main("Premiere", 10,12);