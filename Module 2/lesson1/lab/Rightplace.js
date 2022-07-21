function main(string, char, final) {
    let fin = string.replace('_', char);
    let output = fin === final ? 'Mathched' : 'Not Matched';
    console.log(output);
}
main('Str_ng', 'I', "Strong");
main('Str_ng', 'i', "String");