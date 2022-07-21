function main(num1, num2, num3) {
     if (num1 + 1 === num2 && num2 + 1 === num3) {
        console.log("Ascending");
     }
     else if (num1 - 1 === num2 && num2 - 1 === num3) {
        console.log("Descending");
     }
     else {
        console.log("Not sorted");
     }
}

main(1,2,3);
main(3,1,2);