function main(numbers){

    let pattern = /\+404([ -])\d{3}(\1)\d{4}\b/g;

    let validNumArray =[];
    while((validNum = pattern.exec(numbers)) !== null){
        validNumArray.push(validNum[0]);
    }
    console.log(validNumArray.join(', '));
}
main('+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222');

