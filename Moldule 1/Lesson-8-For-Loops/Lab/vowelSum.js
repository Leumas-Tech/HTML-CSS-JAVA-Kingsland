
// we create our function that takes in a number which will represent them amount of characters in our array. so our for loop will understand how many times to run through the for loop
function main(n,characters) {
    //were calculating sum of letters so lets create a sum variable but not assign it any value yet.
    let sum =0;
    //we create our for loop standard syntax where i is less tan n which is the amount of the letters in the array which is the amount of times the for loop will have to cycle through itself.
    for(let i=0; i < n; i++){
        //everytime it loops the current characters becoimes the next charcter in the index.
        let curChar = characters[i];
if(curChar == "a"){
    sum++;
}
else if(curChar == "e"){
    sum+=2;
}
else if(curChar == "i"){
    sum+=3;
}
else if(curChar == "o"){
    sum+=4;
}
else if(curChar == "u"){
    sum+=5;
} 
//Depending on if the letters in the array are vowels we will add a certain amount to the sum variable we declared above.

//soo we can simply place the sum in a console.log

    }
    console.log(sum);
}
main(3["i","x","u"]);
