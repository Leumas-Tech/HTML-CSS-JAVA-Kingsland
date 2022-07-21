function main(input) {
solve(input);
}




function solve(input) {

    let rev = 0;
    for(let i =0; i < input.length; i++){
        let num = input[i];
        let lastDigit;  
        let currenNumarr = [];
        while(num != 0){
    currenNumarr.push(num);
    currenNumarr.toString();
    currenNumarr = Array.from(String(num),Number).reverse();
    
    lastDigit = num % 10;
      rev = currenNumarr.join("");
      break;
    }

    if(input[i].toString() === rev){
        console.log(`true`);
   
    } else {
        console.log(`false`);

    }
    }
  
    

  }



main([123,323,421,121]);
main([32,2,232,1010]);