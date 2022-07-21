function main(num,pow){
    let product = 1;
    for(let i=1; i <= pow; i++){
        product *= num;
     }
    console.log(product);
}
main(2,5);
main(3,4);