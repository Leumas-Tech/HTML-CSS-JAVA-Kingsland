function main(input,array){
    for(let i=0; i<array.length; i++){
        let target = input;
        let currentNum = array[i];
        if(currentNum === target){
            currentNum = array[i-1];
            let bonusSum = currentNum + (currentNum * (2/10));
            console.log(bonusSum);
        }
    }
}
main(25,[20,30,25]);