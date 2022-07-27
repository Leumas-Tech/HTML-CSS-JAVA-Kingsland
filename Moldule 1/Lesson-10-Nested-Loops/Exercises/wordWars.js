function main(words){
let wordSum =0;
let numArr = [];
//this will loop through the words in the array
for(var i = 0; i< words.length-1; i++){
    let currentWord = words[i];
    //this will loop through the letters in each word thats in the array.
   
    wordSum = 0;
    for(let j =0; j<words[i].length; j++){
        //current letter is the currentword and we loop through each letter of j where j is less than word[i].length;
        let currentLetter = currentWord[j];
        let currentLettertoNum =currentLetter.charCodeAt(0);
        wordSum+=currentLettertoNum;           
    }
     numArr.push(wordSum);
}
// this for loop will loop through our number Array and determine the winner

let max = -Infinity;
let largestWord;
for(let i=0; i<numArr.length; i++){
    if(numArr[i]> max){
        max = numArr[i];
        largestWord = words[i];
    }
}

// for(var k = 0; k<numArr.length; k++){
//     let LargestSum = numArr[k];
//     var largestWord = words[k];
//     if(numArr[k] < numArr[k+1]){
//         largestSum = numArr[k+1];
//         largestWord = words[k+1];
//     }
    
// }
console.log(`Winner is ${largestWord} - ${max}!`);
}

main(['House','Dog','Destination','STOP']);