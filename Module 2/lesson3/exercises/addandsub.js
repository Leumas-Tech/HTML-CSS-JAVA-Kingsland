function sum(num1,num2,num3){
    let sum = num1+num2;
    return sum;
  
}

function subtract(num1,num2,num3){
  let sub = sum(num1,num2,num3) - num3;
  console.log(sub);
}


function main(num1,num2,num3){
    subtract(num1,num2,num3);
}

main(23,6,10); //19
main(1,17,30); // -12
main(42,58,100); // 0

