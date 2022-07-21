function main(arr){
let output = [];
for(let i = 0; i < arr.length; i++){
    let product = 0;
    if(i % 2 != 0){
    product = arr[i] * 2;
    output.push(product);
    }
}
console.log(`${output.reverse().join(" ")}`);

}

//I struggled soo hard with the last one I did this one in like five minutes! I feel like I already understand semester 2 of this course thanks to what I just went through. 


main([10,15,20,25]);