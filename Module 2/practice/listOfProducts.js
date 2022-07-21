
function main(items){

    let sorted = items.sort();

    for(let i =0; i< sorted.length; i++){
            console.log(`${i+1}.${sorted[i]}`);
    }


}

main(["Potatoes","Tomatoes","Onions","Apples"]);