function main(string,symbol,string2){
const targetWord = string2;
string = string.replaceAll('_',symbol);

if(targetWord == string){
    console.log("Matched");
}
else if (targetWord != string){
    console.log("Not Matched");
}
}
main('Str_ng','I','Strong');
main('Str_ng','i','String');
