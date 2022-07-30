function main(array){
    let employee = new Object();


for(let i =0; i< array.length; i++){
    employee.name = array[i];
    employee.NameLength = array[i].length;

    console.log(`Name: ${employee.name} -- Personal Number: ${employee.NameLength}`);
}


}
main([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
