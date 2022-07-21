function main(length,n){
    //What this does is it sets a numberline that defines our boundaries. We can have any negative number up to any real number.
    let min = Infinity;
    let max = -Infinity;

    //here we set the for loop. the syntax for it is . as follows keyword,initialize,place condition,and then loop the loop up ow down. personally i think while loops are easier

    for(let i = 0; i< length; i++) {
        //The current number is currently our place in the index. we place i inside the brackets beuse thats the value that will represent the place in our index beginning at i =0;
        let curNum = n[i];
        //if our current minimum number in the index is less than the current minimum number in our index. our current minimum number becomes that number in the index and we move on.
        if(min > curNum){
            min=curNum;
        }
        //same thing here but opposite for the max if the current number iun our index is greater than our current max number than the current number in our index will become our maximum.
        if(max< curNum){
            max = curNum;
        }
    }

    //we then display is in some cute little console.logs
    console.log("Min number: " +min);
    console.log("Max number: " +max);

}

main(3,[10,350,50]);