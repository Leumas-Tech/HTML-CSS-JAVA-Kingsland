function main(listofNums) {
    let min = Infinity;
    let max = -Infinity;

    let i =0;

    while(listofNums[i] != "END" && i < listofNums.length){
let currentNum = listofNums[i];
        if (currentNum > max){
            max = currentNum;
            
        }
        if(currentNum < min){
            min = currentNum;
            
        }
        i++;
    }

    console.log("Min number: " + min);
    console.log("Max number: " + max);
}

main([10,20,304,50,"END"]);