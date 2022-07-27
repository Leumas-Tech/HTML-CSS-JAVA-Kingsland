function main(string, censor){
let arr = string.split();
let numberofstars = '';

for(let i = 0; i<censor.length; i++){
    numberofstars+= "*";
}
string = string.replaceAll(censor, numberofstars );
console.log(string);
}

main("A small sentence with some words", "small");