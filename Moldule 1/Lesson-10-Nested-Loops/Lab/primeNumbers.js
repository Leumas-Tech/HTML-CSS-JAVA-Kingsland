function main(start,end){
    solve(start,end);
}

function solve(start,end){

    for(let i = start; i<=end; i++){
        let primeNum = true;
        for( let j = 2; j< i; j++){
            if(i%j===0 && i != j){
                primeNum=false;
                break;
            }  
    
        }
     
         if(primeNum === true){
            console.log(i);
        }
    }
}

main(20,30);