function main(n){
 let isPrime = false;
 let counter =0;
 for( let i = 1; i <= n; i++){
    if(n % i === 0){
        counter++;
    }
 }

 if( counter === 2){
    console.log(true);
 } else {
    console.log(false);
 }
}



main(7);
main(81);
