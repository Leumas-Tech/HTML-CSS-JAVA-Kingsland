function main(floors,estates){
    let type="";
for(let i = 0; i<= floors; i++){
if(i%2 == 0){
type = "A";
}
if(i%2 != 0){
    type="O";
}
if(i==floors){
    type="L";
}
let n =0;
for(let n =0; n<= estates; n++){
    console.log(`${type}${floors}${n}`);
}

}
}
main(6,4);
