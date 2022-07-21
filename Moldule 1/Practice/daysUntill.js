function main (startLetter, endLetter) {
    let startNumber = startLetter.charCodeAt(0);
    let endNumber = endLetter.charCodeAt(0);
    let output = '';
    for(let i = startNumber; i <= endNumber; i++){
        output += String.fromCharCode(i+ " ");
    }
     console.log(output);
}

main('a', 'c');
main('f', 'q');