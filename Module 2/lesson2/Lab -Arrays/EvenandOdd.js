function main(array){

    let sumEven =0;
    let sumOdd = 0;

    for(let num of array){
        if(num % 2 === 0){
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    console.log(sumEven-sumOdd);
 } 
 


main([1,2,3,4,5,6]);
main([3,5,7,9]);
main([2,4,6,8,10]);