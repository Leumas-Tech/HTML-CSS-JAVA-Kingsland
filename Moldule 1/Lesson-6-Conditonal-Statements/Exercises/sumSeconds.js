// function sum (num1, num2, num3) {
// let sum = num1 + num2 + num3;
// if (sum > 0 && sum < 60){
//     console.log("0:" + sum);

// }
// else if (sum >= 60 && sum < 120 ){
//     console.log("1:" + sum - 60);

// }
// else if (sum >= 120 && sum < 180 ){
//     console.log("2:" + sum - 120);

// }
// else if (sum == 0) {
// console.log("Thank you");
// }

// }

function main (num1,num2,num3) {
    let sum = num1 + num2 + num3;
    let minutes = 0;
    let seconds = 0;

    if(0 < sum < 59){
      minutes = 0;
      seconds = sum;
    }
   if (60 <= sum < 119){
        minutes = 1;
        seconds =  sum - 60;
      }
    if (120 <= sum < 179){
        minutes = 2;
        seconds =  sum - 120;
    }

    if(seconds>9){
       console.log(`${minutes}:${seconds}`); 
    }
    else if (seconds <= 9){
        console.log(`${minutes}:0${seconds}`); 
    }
    
}






main(35,45,44);
main(22,7,34);
// koalas(50,50,49);
// koalas(14,12,10);


// function main (num1, num2, num3) {
//     let sum = num1 + num2 + num3;
//     if (sum > 0 && sum < 60){
//         console.log("0:" + sum);
    
//     }
//     else if (sum >= 60 && sum < 120 ){
//         console.log("1:" + sum - 60);
    
//     }
//     else if (sum >= 120 && sum < 180 ){
//         console.log("2:" + sum - 120);
    
//     }
//     else if (sum == 0) {
//     console.log("Thank you");
//     }
    
//     }