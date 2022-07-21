function main (firstArray, secondArray){
    for(let i in firstArray){
        firstArray[i] = Number(firstArray[i]);
    }
    for(let i in secondArray){
        secondArray[i] = Number(secondArray[i]);
    }

    let isItEqual = true;
    for( let j = 0; j<firstArray.length;j++){
        if(firstArray[j]!=secondArray[j]){
            isItEqual = false;
            console.log(`Arrays are not identical. Found difference at ${j} index`);
            break;
        }       
    }

    if(isItEqual){
        let sum = 0;

        for(let num of firstArray){
            sum += num;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

main(['10','20','30'],['10','20','30']);
main(['1','2','3','4','5'],['1','2','4','4','5']);
main(['1'],['10']);