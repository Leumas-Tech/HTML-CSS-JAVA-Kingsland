function main(num){
    solve(num);
}

function solve(num){
for(let first = 1; first<= num; first++){
    for(let second = 1; second <= num; second++){
        for(let third = 1; third <= num; third++){
            if(first*second*third === num){
                console.log(`${first}${second}${third}`);
            }
        }
    }
}

}

//this one was way harder than one would think.

//three for loops inside of each other? one for each position in the magic number. were basically gonna be building the number from right to left. we want each of the magic numbers to start at 0. the last number count up untill its at its magic number. 

//first second and third numbers when multiplied together they must equal that magic number. for that to happen only one number can be the magic number. and the other two numbers must be 0.

//  on the even that their product is equal to the input number, we are going to console log the values of the first second and third number in chronological order. 




main(3);