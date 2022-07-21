function main(array) {
    let originalSum =0;
    let newSum =0;
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            originalSum += array[i];
            array[i] = array[i] + i;
            newSum += array[i];
        } else if (array[i]%2 != 0) {
            originalSum += array[i];
            array[i] = array[i] - i;
            newSum += array[i];
        }
    }
    console.log(`[ ${array.join(', ')} ]`);
    console.log(`${originalSum}`);
    console.log(`${newSum}`);

}

main([5,15,23,56,35]);

