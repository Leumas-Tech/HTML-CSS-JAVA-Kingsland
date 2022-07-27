function main(first,last,age){

const person = {firstName: first, secondTime: last, years: age};

for( let key in person) {
    console.log(`${key}: ${person[key]}`);
}
}

main("Peter","Pan","20");