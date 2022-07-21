function main(n){
    for(let i = 1; i<= n; i++){
        let sum = 0;
for (let currentN = i; currentN > 0; currentN = parseInt(currentN/10)){
    sum+= currentN % 10;
}

if(sum == 5 || sum == 7 || sum == 11){
    console.log(`${i} -> True`);
}
else {
    console.log(`${i} -> False`);
}
    }
}
main(15);