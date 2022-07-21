function price (type) {
    var price;
    if (type === "student"){
        price = 1.60;
        console.log("${" + price.toFixed(2) + "}");
    }
    else if (type === "regular"){
        price = 1.00;
        console.log("${" + price.toFixed(2) + "}");
    }
    else {
        console.log("Invalid ticket type!");
    }
}

price("student");
price("regular");