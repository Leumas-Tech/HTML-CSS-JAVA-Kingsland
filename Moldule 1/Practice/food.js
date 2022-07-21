function main(item){
    let type='';
    if(item === "Sushi" || item === "Curry" || item === "Noodles" || item === "Spaghetti"){
        type = "Food";
    }
    else if(item === "Tea" || item === "Water" || item === "Coffee") {
        type = "Drink";
    }
    else {
        type = "Unknown";
    }
    console.log(type);
}
main("Sushi");
main("Water");
main("Rock");