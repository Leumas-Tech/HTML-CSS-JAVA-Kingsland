function main(str, num) {

    let fin = '';
    for (let i = 0; i < num; i++) {
        fin += str;
    }
    console.log(`${fin}`);
}



main('abc', 3);
main('String', 2);