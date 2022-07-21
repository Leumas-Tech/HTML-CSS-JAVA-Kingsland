function main(number) {
    let result = grades(number);

}


function grades(grade) {
    if (grade >= 2 && grade < 3) {
        return (`Fail`);
    } else if (grade >= 3 && grade < 3.5) {
        console.log(`Poor`);
    } else if (grade >= 3.5 && grade < 4.5) {
        console.log(`Good`);
    } else if (grade >= 4.5 && grade < 5.5) {
        console.log(`Very Good`);
    } else if (grade >= 5.5 && grade < 6) {
        console.log(`Excellent`);
    }
}

main(3.33);
main(4.50);