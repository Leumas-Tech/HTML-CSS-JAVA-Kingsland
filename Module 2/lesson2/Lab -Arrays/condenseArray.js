function main (numbers) {
while(numbers.length > 1){
    let condensed = [];

    for (let i = 0; i< numbers.length-1; i++){
    condensed[i] = numbers[i] + numbers[i+1];
    }
    
    numbers = condensed;
}
console.log(numbers.join(""));
}

main([2,10,3]);
//12 13
//25
main([5,0,4,1,2]);
// 5,4,5,3
//9,9,8
//19,17
//35
main([1]);
//1
