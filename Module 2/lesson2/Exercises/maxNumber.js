function main(arr) {

    const aray = arr;

    const maxnum = Math.max(...aray);
    const index = arr.indexOf(maxnum);
    let fin = "";
    for (let i = index; i < arr.length; i++) {
        fin += arr[i] + " ";
    }
    console.log(`${fin}`);
}

main([1, 4, 3, 2]);