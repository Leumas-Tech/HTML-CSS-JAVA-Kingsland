function main(n,commands){

let index = 0;
while(commands[index]!= "End"){
    if(commands[index]==="Inc"){
        n++;
    }
    else if(commands[index]==="Dec"){
        n--;
    }
    index++;
}
console.log(n);
}
main(5,["Inc","End"]);
main(5,["Dec","End"]);