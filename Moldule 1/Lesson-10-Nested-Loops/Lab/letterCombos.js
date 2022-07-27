function main(start,end,exclude){
    solve(start,end,exclude);
}

function solve(start,end,exclude){
    let startNumber = start.charCodeAt(0);
    let endNumber = start.charCodeAt(0);
    let skipNumber = exclude.charCodeAt(0);
    let count =0;
    for(let i = startNumber; i<=endNumber;i++){
        if(i != skipNumber){
            for(let j = startNumber; j<=endNumber;j++){
                if(j != skipNumber){
                    for(let k = startNumber; k <=endNumber; k++){
                        if(k != skipNumber){
                            count++;
                            let cha1 = String.fromCharCode(i);
                            let cha2 = String.fromCharCode(j);
                            let cha3 = String.fromCharCode(k);
                            console.log(cha1+cha2+cha3);
                        }
                    }
                }
            }  
        }
    }
console.log(count);
}

main('a','c','b');