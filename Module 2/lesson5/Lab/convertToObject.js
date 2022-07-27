function main(jsonStr){
    let person = JSON.parse(jsonStr);

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

}


main('{"name": "George", "age": "40", "town": "Atlanta"}');