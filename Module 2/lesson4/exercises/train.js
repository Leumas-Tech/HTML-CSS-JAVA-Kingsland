function main(array){
//this is to iterate through the entire array we are given
    for(let i =0; i< array.length; i++){
        //first part of the array is the wagons
        //were gonna add any commands from the main array into this string.
        var numOfPassengers = array[0].toString();
        //second part of the array tells us max capacity of the wagons
        let maxCapacity = array[1];
        //were gonna keep iterating through the commands now that we have the two important ones

// lets make a number array that we can manipulate.
var passengersArray = array[0].split();
//okay heres our new array. we took the first string in the original array and split it up into its own individual string.

//we want to push any other values from the commands into this array!
if(array[i].includes('Add')){
    passengersArray[0] = passengersArray[0] + (array[i].substr(3));
    break;
} 
//once we have the new array we can loop through it and check the value of each, if they are less than the appropriate value given in array[1]. then we will mvoe to the next wagon and add the next command.

for(let j =0; j<passengersArray.length; j++){
    if(passengersArray[j] + array[i] <= array[1]){
        passengersArray[j]+=array[i];
    }
}

   
   }
     console.log(passengersArray);
}

main(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);

main(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);