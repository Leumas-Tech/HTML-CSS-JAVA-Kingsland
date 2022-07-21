function main(number) {
solve(number);
}

function solve(number){
    let value = number;
    let evensum =0;
    let oddsum = 0;
 
    sum = value
        .toString()
        .split('');

    for(let i = 0; i < sum.length; i++){
        if(sum[i]%2 ===0){
            evensum += parseInt(sum[i]);
        } else if(sum[i] % 2 != 0) {
            oddsum += parseInt(sum[i]);
        }
    }

console.log(`Odd sum = ${oddsum}, Even sum = ${evensum}`);
}

main(1000435);
main(3495892137259234);