function main(arr, num) {
    const array = arr;
    let fin = "";
    for (let i = 0; i < num; i++) {
        array.push(array.shift());
    }
    for (let j = 0; j < array.length; j++) {
        fin += array[j] + " ";
    }
    console.log(`${fin}`);
}

main(['51', '47', '32', '61', '21'], 2);