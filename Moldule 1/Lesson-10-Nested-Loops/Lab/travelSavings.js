function main(savings){
    solve(savings);
}

function solve(savings){
    //because out array is mixed with numbers and commands we need to use .shift which will set the current value in our array to the first value in the array
    let currentValue = savings.shift();
    //we then create a while loop that will read through the commands, as long as the command is not "End"

    while(currentValue != 'End'){
        //place we want to go is the 
        let destination = currentValue;
        let budget = savings.shift();
        let moneySaved =0;
        while(moneySaved< budget){
            let moneyIn = savings.shift();
            moneySaved+=moneyIn;  
           console.log(`Collected: ${moneySaved}`);
            if(moneySaved>budget){
              console.log(`Going to ${destination}!`);
                break;
            }            
        }
        currentValue = savings.shift();
    }
}
//destination , budget , amount amount amount , destination , budget, amount amount amount;
main(['Singapore', 5000, 300, 3000, 2500, 'Philippines', 2000, 500,500,1300, 'End']);