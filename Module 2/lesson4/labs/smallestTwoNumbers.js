
function main(aray){

    let sorted = aray.sort((a, b) => a - b);

    console.log(sorted.slice(0,2).join(" "));

}

main([30,15,50,5]);

main([-43,-34,-12,0,534,32,23,54]);