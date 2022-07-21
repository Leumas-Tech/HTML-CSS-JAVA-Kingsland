function main(numbers){
let num1 = Number(numbers.shift());
let num2 = Number(numbers.pop());
let sum = num1 + num2;
console.log(sum);
}

main(['20','30','40']); //60
main(['10','17','22','33']); //43
main(['11','58','69']); // 80