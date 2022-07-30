function main(string){
// take our string toss it into an array so we can sort through the words
let array = string.split();
let specialArray=[];

for(let i = 0; i < array.length; i++){
if(array[i].startsWith("#")){
specialArray.push(array[i].toString());
}
}

console.log(specialArray);


}
main('Nowadays everyone uses # to tag a #special word in #socialMedia');
main('#Abc #def #gh1 jkl#');
main('At #Kingsland #University we deliver accredited education, in an online environment, that works around your schedule.');

