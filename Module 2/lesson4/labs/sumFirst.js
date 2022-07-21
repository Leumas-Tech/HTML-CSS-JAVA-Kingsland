function main(arr) {

    solve(arr);


}

function solve(arr) {

    const arrayOfStrings = arr;

    const arrayOfNumbers = [];

    arrayOfStrings.forEach(str => {
        arrayOfNumbers.push(Number(str));
    });

    let sum = (arrayOfNumbers[0] + arrayOfNumbers[arr.length - 1]);
    console.log(sum);


}

main(['20', '30', '40']);