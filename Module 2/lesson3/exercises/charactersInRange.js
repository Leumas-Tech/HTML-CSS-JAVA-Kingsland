function main(let1,let2){
solve(let1,let2);
}

function solve(let1,let2){

// console.log(String.fromCharCode(let1.charCodeAt(0),let2.charCodeAt(0)));


    let aray=[]; 
    let let1ascii = let1.charCodeAt(0);
    let let2ascii = let2.charCodeAt(0);
    if(let2ascii < let1ascii){
        for (let idx=let2.charCodeAt(0) - 1 ,end=let1.charCodeAt(0) + 1 ; idx <=end; --idx){
        aray.push(String.fromCharCode(idx));
} 
    }


else if (let2ascii > let1ascii){
            for (idx=let1.charCodeAt(0) + 1 ,end=let2.charCodeAt(0) - 1 ; idx <=end; ++idx){
        aray.push(String.fromCharCode(idx));
    }  
}
 
    
    console.log(aray.join(" "));
    console.log(let1ascii);
    console.log(let2ascii);
    
}

main("a","d");
main("#",":");
main("C","#");