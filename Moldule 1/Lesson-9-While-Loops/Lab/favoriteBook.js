function main(favoriteBook,List){

let currentBook ="";
for (let i = 0; i<List.length;i++){
    currentBook = List[i];

    if(currentBook != favoriteBook){
        console.log(`Invalid book: ${currentBook}`);
    }

    else if(currentBook === favoriteBook){
        console.log(`Book found!`);
        break;
    }
}
}
main("Alice in Wonderland",["Winnie the Pooh" , "Alice in Wonderland"]);