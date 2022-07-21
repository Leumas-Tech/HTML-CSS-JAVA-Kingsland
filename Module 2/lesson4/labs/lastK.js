function main(n,k){
    let output=[1];
    //The lowest possible lookback we can have is 0
    //because of this pay attention to the next let statement were making for lookBack
for(let i = 1; i < n; i++){
    //we let the sum be 0 up here cause each time the next for loop repeats the sum will ahev to go back to 0 so we can culculate the next sum in our array.
    let lookBack =  Math.max(0,i-k);
    let sum =0;
    // this is us ultimately saying the index for our array looking back CAN NEVER drop below 0. Because where the hell would index -1 be at right? RIGHT!
    //cool cool now we need another for loooop.

    //for the previous for loop we were looking forward into our array to create the index for the next value. We need another for loop that will calculate the sum of the previous indexes. Based on the current for loop telling us which index we are currently on. lookBack also tells us we cannot have an index less than 1.  

    //we want to start our next. for loop "1 less than the index were building" which makes sense because if were building index3. were gonna need the sum of index 2...1.. etc... so if i is on index 4 j should be on index 3

    //j >= lookback. because lookback's index can never be 0 neither should js index. There are no indexes less than 0.!
    //j--
    for(let j = i-1; j>=lookBack;j--){
//this for loop will calculate our sums
sum += output[j];
// because i is the index we are building. and j is the 1 less than the index we are building. and j will cycle through in this for look untill it is greater than or equal to the lookBackindex, which will always be greater than 0. Im being repetitive to be sure i fully understand this one bare with me. 

// once the sum is added up next thing we need to do is add it to our array. Without watching the next portion of the video im going to assume we are going to add the sum to the array in the first for loop, before we declare the sum set to 0.
    }
//i was part correct we do put it in the first for loop, but its after we the second for loop. so we have big for loop eating a for loop followed by a push statement likeheree.
output.push(sum);
//we use.push because that will just add the sum to our array. Learned a new syntax so thats cool super easy.

}
//finally we output.
console.log(output.join(" "));
//.join same thing as .push almost cool. learned that too. 2 syntaxes in two minutes yay.

// aww yeahh it works!
}

main(6,3);

// this one is pretty flippin though. i have to rewatch the example

// n is the length of array

// k is how many numbers we are going to add back to create our sum which will be the next index in the array.

// our output array is going to start with 1, so output i@0 = 1

// we start with a for loop to start constructing our array, we declare i as variable. 

// okay i get it now so our objective is to make an array the size of the first number. the new array starts with [1] and will add the values in the array to create new numbers in the array. How many numbers in the array are added each time? Well out code is gonna look back (our second input number) amount of times and add those numbers, into a summed integer which will then be stored as the next index in the output array we declare.

// so 8,2 means we have an array thats 8 digits long, and each time a new number is added to the array, the previous 2 numbers in the array will be added, to be the next item in the array.

// I w