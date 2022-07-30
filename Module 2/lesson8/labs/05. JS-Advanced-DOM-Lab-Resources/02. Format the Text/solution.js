// You need to create a new paragraph element which holds no more than 3 sentences from the given input.
// • If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these
// sentences and append this paragraph to the div with an id "output".
// Otherwise, when you have more than 3 sentences in that input paragraph, you need to create enough paragraphs
// to get all sentences from the input text.
// Just remember to restrict the sentences in each paragraph to 3.


function solve() {
  let inputText = document.getElementById("input").innerHTML;


  let output = document.getElementById("output");

  //splitting up our input string into sentences, since right now we only have one big long piece of text.

  let sentenceArray = inputText.split(". ");
  //now we have an array of sentences we need to loop through our array and add them to paragraphs at most 3 at a time.
console.log(sentenceArray);
console.log(sentenceArray[sentenceArray.length-1]);
  for(let i = 0; i < sentenceArray.length; i++){
    //crete a p tage and toss sentences in.
    let Organizedp = document.createElement("p");
    for(let j = i; j <i + 3 && j < sentenceArray.length; j++){
      if(j=== sentenceArray.length-1){
        Organizedp += sentenceArray[j];
      } else {
        Organizedp += sentenceArray[j]+ ". ";
      }
    }
    output.append(Organizedp);
  }
}