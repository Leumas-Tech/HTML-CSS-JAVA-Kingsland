function main(arr1, arr2) {
    let out = "";

    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 === 0) {
            out += (parseInt(arr1[i]) + parseInt(arr2[i]));

        } else {
            out += arr1[i] + arr2[i];

        }
        while (i < arr1.length - 1) {
            out += " - ";
            break;
        }
    }

    console.log(out);
}

main(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);