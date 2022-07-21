function main(numDays, patientsOnDay) {
    // let patientSum = 0;
    let doctors = 7;
    let numOfPatients = 0;
    let patientsTreated = 0;
    let patientsUntreated = 0;
    for (let i = 0; i < numDays; i++) {
        // patientSum = patientSum + patientsOnDay[i - 1];
        numOfPatients = patientsOnDay[i]
        //every 3rd day
        if ((i + 1) % 3 == 0) {
            if (patientsUntreated > patientsTreated) {
                doctors++
            }
        }
        //if there are less or equal patients than doctors
        //the amount of patiens treated will be 100%
        if (numOfPatients > doctors) {
            patientsTreated += doctors;
            patientsUntreated += numOfPatients - doctors;
        } else {
            patientsTreated += numOfPatients;
        }
        //if the amount of patients are greater than the amount of doctors
        //the amount of patiens treated will be equal to the amount of doctors
        // and the amount of untreated patients will be equal to the amount of patients that day minus the amount of doctors since they all can only handle one.
    }
    console.log(`Treated patients: ${patientsTreated}.`);
    console.log(`Untreated patients: ${patientsUntreated}.`);
}


// function main (numDays,patientsOnDay) {
//     let patientSum=0;
//     let doctors = 7;  
//     var patientsTreated = 0;
//     var patientsUntreated = 0;
// for(let i = 1; i <= numDays; i++){
//     patientSum = patientSum + patientsOnDay[i-1];
//     console.log(i);
// //every 3rd day
// if((((i-1)%3) === 0 ) && (patientsTreated < patientsUntreated)){    
//             doctors++ ;
//     } 
// //if there are less or equal patients than doctors
// //the amount of patiens treated will be 100%    
// if(patientsOnDay[i] < doctors){
//     patientsTreated = patientsTreated + (patientsOnDay[i]);

// }
// if(patientsOnDay[i] === doctors){
//     patientsTreated = patientsTreated + doctors;

// }
// //if the amount of patients are greater than the amount of doctors
// //the amount of patiens treated will be equal to the amount of doctors
// // and the amount of untreated patients will be equal to the amount of patients that day minus the amount of doctors since they all can only handle one.
// if(patientsOnDay[i] > doctors){
//     patientsUntreated =  patientsUntreated + (patientsOnDay[i] - doctors);
 

// }

// }
// console.log(`Treated patients: ${patientsTreated}`);
// console.log(`Untreated patients: ${patientsUntreated}`);


// }

main(4,[7,27,9,1]);
