function main(searching,capacity,books) {
let i = 0;
let currentBoook ='';
while ( (i < capacity) && (currentBoook != searching)){
    currentBoook = books[i];


if(currentBoook === searching) {
console.log(`You checked ${i} books and found it.`);

} else if(currentBoook != searching) {
           i++; 
    }
}
if(i >= books.length && currentBoook != searching){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${i} books.`);

}
}

main('Troy',8,['Stronger','LifeStyle','Troy']);
main('The Spot',4,['Hunger Games','Harry Potter','Toronto','Spotify']);