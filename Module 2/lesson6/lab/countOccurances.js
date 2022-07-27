function main(text,searchingword){
    let words = text.split(" ");
    let count =0;
    for( let word of words){
        if(word === searchingword ){
            count++
        }
    }
    console.log(count);
}

main("This is a word and it also is a sentence",
"is")