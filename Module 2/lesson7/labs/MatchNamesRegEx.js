function main(names){
let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]*\b/g;
//we can also do /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let validNameArray =[];
while((validName = pattern.exec(names)) !== null){
    validNameArray.push(validName[0]);
}
console.log(validNameArray.join(' '));
}
main("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");


