function main(name,grades) {
    let i =0;
    let sum = 0;
    let count = 0;
    while(i< grades.length){
        sum += grades[i];
        count++;
        i++;
    }

    let average = sum/count;

    if(average > 4){
      console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);  
    } else {
        console.log(`Must repeat!`);
    }
    

}


main('John',[4,5.5,6,5.43,4.5,6,5.55,5,6,6,5.43,5]);